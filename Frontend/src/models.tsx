export interface Livre {
	id: string
    Titre: string;
    Resume: string;
    LienPedagogique: string;
    LienImage: string;
    LienAchat: string;
    Editeur: string;
    Dispo:boolean;
    Favorite?: boolean;
}

export interface Animation{
    id?: string | number;
}


