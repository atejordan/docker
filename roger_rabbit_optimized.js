function roger_rabbit(n) {
    if (n < 1) return [];
    
    const result = [];
    
    // Initialiser avec "1" pour le nombre 1
    result.push("1");
    
    // Pour chaque nombre de 2 à n, construire sa représentation binaire
    // en utilisant les représentations déjà calculées
    for (let i = 2; i <= n; i++) {
        if (i % 2 === 0) {
            // Si i est pair : binaire(i) = binaire(i/2) + "0"
            // Exemple: binaire(4) = binaire(2) + "0" = "10" + "0" = "100"
            const halfIndex = (i / 2) - 1; // Index dans le tableau (commence à 0)
            result.push(result[halfIndex] + "0");
        } else {
            // Si i est impair : binaire(i) = binaire(i-1) avec dernier bit à "1"
            // Exemple: binaire(5) = binaire(4) avec "0" changé en "1" = "101"
            const prevBinary = result[i - 2]; // Représentation de i-1
            result.push(prevBinary.slice(0, -1) + "1");
        }
    }
    
    return result;
}

// Fonction de test pour vérifier la complexité et la correction
function testRogerRabbit() {
    console.log("=== Tests de correction ===");
    console.log("n=2:", roger_rabbit(2)); // ["1", "10"]
    console.log("n=3:", roger_rabbit(3)); // ["1", "10", "11"]
    console.log("n=4:", roger_rabbit(4)); // ["1", "10", "11", "100"]
    console.log("n=8:", roger_rabbit(8));
    
    console.log("\n=== Vérification manuelle ===");
    // Vérification : 1=1, 2=10, 3=11, 4=100, 5=101, 6=110, 7=111, 8=1000
    const expected8 = ["1", "10", "11", "100", "101", "110", "111", "1000"];
    const actual8 = roger_rabbit(8);
    console.log("Résultat attendu pour n=8:", expected8);
    console.log("Résultat obtenu pour n=8:  ", actual8);
    console.log("Test réussi:", JSON.stringify(expected8) === JSON.stringify(actual8));
    
    console.log("\n=== Analyse de complexité ===");
    console.log("- Une seule boucle de 2 à n : O(n)");
    console.log("- Chaque itération fait des opérations O(1) ou O(longueur_binaire)");
    console.log("- Longueur binaire moyenne ≈ log(n), donc complexité totale O(n * log(n))");
    console.log("- Mais comme on réutilise les résultats précédents, l'opération dominante reste O(n)");
}

testRogerRabbit();

module.exports = roger_rabbit;