# import os
# from unicodedata import name
# os.system('cls' if os.name == 'nt' else 'clear')

# def print_type(data):
#     for i in data :
#         print(i, type(data))

# test = [1, 2, 3, 'Naim', 4, 5, 6, 7, 8, True, 9, 10]
# print_type(test)

# class Person:
#     name = 'Naim'
#     age = 25

# person1 = Person()
# person2 = Person()

# print(person1.name)
# print(person2.name)

# Person.job = 'Programmer'

# print(person1.job)

# # class attributes vs instance attributes
# person1.location = 'Turkey'
# # print(person1.location)
# person2.name = 'Münir'
# print(person1.name)

# SELF is a keyword

# class Person:
#     name = 'Naim'
#     age = 25

#     def test(self):
#         print('test')

#     def set_details(self, name, age):
#         self.name = name
#         self.age = age

#     def get_details(self):
#         print(self.name, self.age)

# person1 = Person()
# person1.test()
# Person.test(person1)

# person1.get_details()
# person1.set_details('Münir', 25)
# person1.get_details()

# static methods

