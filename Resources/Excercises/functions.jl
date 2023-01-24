"""
Function definition methods
"""
# function myFirstFunction(name)
#     print("Hello $name")
# end

# myFirstFunction("Juan")

# myFirstFunction(name) = print("Hello $name")
# myFirstFunction("Juan")

# mySecondFunction(x, y) = begin
#     print(x + y)
# end

# mySecondFunction(x, y) = (print(x + y));

"""
returning values
"""
# function mySumOperation(a, b)
#     return a + b
#     print("Despues del return")
# end

# result = mySumOperation(5, 10)

# print("El resultado de la suma entre 5 y 10 es $result")

"""
Returning multiple values
"""
# function someOperations(a, b)
#     return a + b, a - b, a * b, a // b
# end

# suma, resta, multiplicacion, division = someOperations(4, 2)

# print("suma:$suma\nresta:$resta\nmultiplicacion:$multiplicacion\ndivision:$division\n")

"""
Giving multiple args
"""
# function myPersonalInfo(name, age, role, id, hobbies, food, music)
#     information = "Nombre: $name\
#                     Edad: $age\
#                     Rol: $role\
#                     ID: $id
#                     Otros:[hobbies: $hobbies, food: $food, music: $music]"
#     return information
# end

# print(myPersonalInfo("Miguel", 17, "Estudiante", 1234, "estudios-deporte", "Todo lo que sea comestible",  ))

function multipleArgs(a, b, x...)
    return (a, b, x)
end

println(multipleArgs(1, 2, 3))
println(multipleArgs(1, 2, 3, 4))
println(multipleArgs(1, 2, 3, 4, 5))
println(multipleArgs(1, 2, 3, 4, 5, 6))

