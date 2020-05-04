import {db} from "./database";

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
     * Retourne un objet JSON contenant l'utilisateur correspondant à son identificateur d'authentification unique `uid`.
     * NB : Le champ recherché est `AuthUID` et non pas `ID`.
     * @param {string} uid Identificateur unique de l'utilisateur.
     * @example await getUserByAuthUid("Cc0YbyxXPSckFWjXcj2bduNwAVS2");
     */
    static async getUserByAuthUid(uid) {
        let snapshot = await db.collection("User").where("AuthUID", "==", uid).get();
        return snapshot.docs[0].data();
    }

    /**
     * Retourne un objet JSON contenant le premier document dans la collection `collection` dont l'identificateur correspond à `id`.
     * @param {string} collection Collection cible
     * @param {string} id Identificateur unique du document
     * @example var usr = await DbUtils.getDocumentById("User", "deb7df071");
     */
    static async getDocumentById(collection, id) {
        let snapshot = await db.collection(collection).where("ID", "==", id).get();
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
    
    /**
     * Retourne un `string` contenant un identificateur quasi-unique (nombre formaté en hexadécimal).
     */
    static generatePseudoRandomId() {
        return Math.floor(Date.now() * Math.random()).toString(16);
    }
}

/**
 * Fournit des méthodes utilitaires pour un code plus concis.
 */
export class CodeUtils {

    /**
     * Formate le Timestamp Firestore en date courte (dd/MM/yyyy).
     * @param {firebase.firestore.Timestamp} firestoreDate Timestamp Firestore à convertir.
     */
    static toShortDate(firestoreDate) {
        if (!firestoreDate) {
            return '';
        }
        var dfb = firestoreDate.toDate();

        var month = (dfb.getMonth() + 1).toString();
        return `${dfb.getDate()}/${month.length !== 2 ? '0' + month : month}/${dfb.getFullYear()}`;
    }
}