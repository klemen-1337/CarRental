from django.db import models
from django.contrib.auth.models import (BaseUserManager, AbstractBaseUser, PermissionsMixin)

class UserAccountManager(BaseUserManager):

    def create_user(self, username, email, password=None):

        if not email:
            raise ValueError('Users must have an email address')

        email = self.normalize_email(email)
        email = email.lower()

        user = self.model(
            email=email,
            username=username,
        )

        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, username, email, password=None):
        user = self.create_user(
            username,
            email,
            password=password
        )
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)

        return user


class UserAccount(AbstractBaseUser, PermissionsMixin):
    username = models.CharField(max_length=255)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    email = models.EmailField(max_length=255, unique=True)

    objects = UserAccountManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    def __str__(self):
        return self.email