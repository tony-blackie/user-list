from rest_framework import viewsets
from dinosaurs.serializers import DinosaurSerializer, UserSerializer
from dinosaurs.models import Dinosaur, User


class DinosaurViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Dinosaur.objects.all()
    serializer_class = DinosaurSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer