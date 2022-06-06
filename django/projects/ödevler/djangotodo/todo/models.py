from django.db import models

# Create your models here.

class Todo(models.Model):
  title         = models.CharField(max_length=50)
  decsription   = models.TextField()

  PRIORITY = (
    ('H', 'High'),
    ('M', 'Medium'),
    ('L', 'Low'),
  )

  priority      = models.CharField(max_length=10, choices=PRIORITY)
  isCompleted   = models.BooleanField(default=False)
  updated_date  = models.DateTimeField(auto_now=True)
  created_date  = models.DateTimeField(auto_now_add=True)

  def __str__(self):
    return self.title