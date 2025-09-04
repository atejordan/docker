function roger_rabbit(n) {
    if (n < 1) return [];
    
    const result = [];
    
    // Commencer avec "1" pour le nombre 1
    result.push("1");
    
    // Pour chaque nombre de 2 à n
    for (let i = 2; i <= n; i++) {
        // Trouver la représentation binaire du nombre i
        // en utilisant les propriétés des nombres binaires
        
        // Si i est pair : binaire(i) = binaire(i/2) + "0"
        // Si i est impair : binaire(i) = binaire(i-1) avec le dernier bit changé de 0 à 1
        
        if (i % 2 === 0) {
            // i est pair : ajouter "0" à la représentation de i/2
            const halfIndex = (i / 2) - 1; // -1 car les indices commencent à 0
            result.push(result[halfIndex] + "0");
        } else {
            // i est impair : prendre la représentation précédente et changer le dernier "0" en "1"
            const prev = result[i - 2]; // i-1 en index (car commence à 0)
            result.push(prev.slice(0, -1) + "1");
        }
    }
    
    return result;
}

// Tests avec les exemples fournis
console.log("Test n=2:", roger_rabbit(2)); // Attendu: ["1", "10"]
console.log("Test n=3:", roger_rabbit(3)); // Attendu: ["1", "10", "11"] 
console.log("Test n=4:", roger_rabbit(4)); // Attendu: ["1", "10", "11", "100"]

// Tests supplémentaires
console.log("Test n=1:", roger_rabbit(1)); // Attendu: ["1"]
console.log("Test n=8:", roger_rabbit(8)); // Pour vérifier plus loin

module.exports = roger_rabbit;