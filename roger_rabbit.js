function roger_rabbit(n) {
    if (n <= 0) {
        return [];
    }
    
    const result = [];
    let current = "1"; // Commencer avec la représentation binaire de 1
    result.push(current);
    
    // Générer les représentations binaires de 2 à n
    for (let i = 2; i <= n; i++) {
        current = addOneToBinary(current);
        result.push(current);
    }
    
    return result;
}

// Fonction helper pour ajouter 1 à une représentation binaire
function addOneToBinary(binary) {
    let result = "";
    let carry = 1; // On ajoute 1
    
    // Parcourir de droite à gauche
    for (let i = binary.length - 1; i >= 0; i--) {
        const digit = parseInt(binary[i]) + carry;
        
        if (digit === 2) {
            result = "0" + result;
            carry = 1; // Retenue
        } else {
            result = digit.toString() + result;
            carry = 0; // Plus de retenue
        }
    }
    
    // S'il reste une retenue, ajouter un 1 au début
    if (carry === 1) {
        result = "1" + result;
    }
    
    return result;
}

// Tests avec les exemples donnés
console.log("Test n=2:", roger_rabbit(2)); // ["1", "10"]
console.log("Test n=3:", roger_rabbit(3)); // ["1", "10", "11"]
console.log("Test n=4:", roger_rabbit(4)); // ["1", "10", "11", "100"]

// Tests supplémentaires
console.log("Test n=1:", roger_rabbit(1)); // ["1"]
console.log("Test n=8:", roger_rabbit(8)); // ["1", "10", "11", "100", "101", "110", "111", "1000"]