import db from "./database";

/**
 * Fournit des méthodes permettant un accès facilité à la base de données.
 */
export class DbUtils {
    /**
     * Retourne un `Array` contenant la liste des utilisateurs.
     * @example await getUsers();
     */
    static async getUsers() {
        let snapshot = await db.collection("User").get();
        return snapshot.docs.map(d => d.data());
    }

    /**
     * Retourne un objet JSON contenant le premier utilisateur correspondant à l'identificateur unique `uid`.
     * @param {string} uid Identificateur unique de l'utilisateur.
     * @example await getUserByUid("Cc0YbyxXPSckFWjXcj2bduNwAVS2");
     */
    static async getUserByUid(uid) {
        let snapshot = await db.collection("User").where("ID", "==", uid).get();
        return snapshot.docs[0].data();
    }

    /**
     * Retourne un `Array` contenant la liste des documents contenus dans la collection `collection`.
     * @param {String} collection
     * @example await getDocuments("Users"); // Récupère tous les utilisateurs.
     */
    static async getDocuments(collection) {
        let snapshot = await db.collection(collection).get();
        return snapshot.docs.map(d => d.data());
    }

    /**
     * Retourne un `Array` contenant la liste des documents contenus dans la collection `collection`, filtrée par la condition Where `field` `condition` `value`.
     * @param {string} collection 
     * @param {string} field 
     * @param {firebase.firestore.WhereFilterOp} condition 
     * @param {string} value 
     * @example await getDocumentsWhere("Users", "ID", "==", "Cc0YbyxXPSckFWjXcj2bduNwAVS2")
     */
    static async getDocumentsWhere(collection, field, condition, value) {
        let snapshot = await db.collection(collection).where(field, condition, value).get();
        return snapshot.docs.map(d => d.data());
    }
    
}

/**
 * Fournit des méthodes utilitaires pour un code plus concis.
 */
export class CodeUtils {

}