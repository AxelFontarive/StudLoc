/**
 * Fournit des propriétés statiques relatives à l'authentification.
 */
export class Auth {
    /**
     * Retourne `true` si un utilisateur est authentifié.
     */
    static isUserConnected = false;
    /**
     * Retourne un tableau contenant l'utilisateur authentifié, ou `undefined` s'il n'y a pas d'utilisateur authentifié.
     */
    static currentUser = undefined;
}