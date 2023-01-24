"""
Conditional and short conditional structures
"""

using Printf

myNumber = rand(-10:6)

# if myNumber > 0
#     @printf("%d es MAYOR a 0", myNumber)
# elseif myNumber > 5
#     @printf("%d es MAYOR a 5", myNumber)
# elseif myNumber > 2 && myNumber < 8
#     @printf("%d es MAYOR a 2 y MENOR a 8", myNumber)

# else
#     @printf("%d es MENOR a 0", myNumber)
# end

# if myNumber == 5
#     @printf("%d es IGUAL a 5", myNumber)
# elseif myNumber == 6
#     @printf("%d es IGUAL a 6", myNumber)
# else
#     @printf("%d es MENOR a 5 y a 6 ", myNumber)
# end

# scope
# if 5 > 0
#     result = true
# else
#     result = false
# end
# println(result)

# value of conditional anything but true or false


"""
Compound expressions
"""

# #Without compund expressions
# someVarX = 2
# someVarY = 10
# someExpression = someVarX + someVarY
# # println(someExpression)
# #With compund expressions method #1
# someExpression = begin
#     someVarX = 2
#     someVarY = 10
#     someVarX + someVarY
# end
# # println(someExpression)
# #With compund expressions method #1
# someExpression = (someVarX = 2; someVarY = 10; someVarX + someVarY)
# println(someExpression)

"""
iteration structures
"""

# for i = 1:10
#     print(i, " ")
# end



for i = 1:typemax(Int64)
    if i == 100
        break
    elseif i % 2 == 0
        continue
    else
        print(i, " ")
    end
end





