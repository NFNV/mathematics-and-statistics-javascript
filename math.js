console.group('Square')

const calculateSquare = side => {
    return {
        perimeter: `${side * 4}cm`,
        area: `${side * side}cm2`
    }
}

console.table(calculateSquare(5))

console.groupEnd('Square')

console.group('Triangle')

const calculateTriangle = (side1, side2, base, height) => {
    return {
        perimeter: `${side1 + side2 + base}cm`,
        area: `${(base * height) / 2}cm`
    }
}

console.table(calculateTriangle(6, 6, 4, 5.5))

console.groupEnd('Triangle')


console.group('Circle')

const calculateCircle = (radius) => {
    return {
        circumference: (radius * 2) * Math.PI,
        area: (radius ** 2) * Math.PI
    }
}

console.table(calculateCircle(1))

console.groupEnd('Circle')