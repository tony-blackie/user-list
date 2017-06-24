from django.db import models


class Dinosaur(models.Model):
    species = models.TextField()

class User(models.Model):
    firstName = models.TextField()
    secondName = models.TextField()
    email = models.TextField()
    age = models.TextField()