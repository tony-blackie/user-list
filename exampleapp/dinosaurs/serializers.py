from dinosaurs.models import Dinosaur, User
from rest_framework import serializers


class DinosaurSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Dinosaur
        fields = ('url', 'species')

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('firstName', 'secondName', 'age', 'email')