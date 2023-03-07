import Buffet from './img/buffet.jpg';
import Buffet2 from './img/buffet2.jpg';
import Buffet3 from './img/buffet3.jpg';
import Buffet4 from './img/buffet4.jpg';
import Buffet5 from './img/buffet5.jpg';
import separation from './img/separate.png';
import cupcake_noisettes from './img/cupcake_noisettes.jpg';
import cupcake_bleu from './img/cupcake_bleu.jpg';
import mini_tartelettes_choco from './img/mini-tartelettes-choco.jpg';
import macaronsRose from './img/macaronsRose.jpg';

export const images = [
    { title: "Buffet anniversaire", description: "Différents petits délices sucrés et salés, un gateau d'anniversaire, plusieurs saveurs disponibles", img: Buffet2 },
    { title: "Buffet baby shower", description: "Buffet avec friandises aux couleurs bleu et rose, un grand gateau coloré", img: Buffet },
    { title: "Buffet occasion", description: "Buffet avec multiples choix de petits canapés, mini gateaux, mini quiches, mini pizzas,...", img: Buffet3 },
    { title: "Buffet toute occasion", description: "Buffet aux choix pour toute occasion ", img: Buffet4 },
    { title: "Buffet amis ou collègues", description: "Buffet avec multiples choix de petits canapés, mini gateaux, mini quiches, mini pizzas,...", img: Buffet5 },

]


//MenuData 
export const MenuData = {
    titre: 'Nos services',
    separationImg: separation,
    plats: [
        {
            image: cupcake_noisettes,
            nom: 'cupcakes noisettes',
            prix: '2.50 €',
            description: 'Vous vous régalerez avec cette recette facile de cupcakes qui vous donnera de délicieux petits gâteaux aux noisettes, ultra moelleux.'
        },
        {
            image: cupcake_bleu,
            nom: 'cupcakes bleus',
            prix: '2.50 €',
            description: 'lorem ipsum bla bla'
        },
        {
            image: mini_tartelettes_choco,
            nom: 'mini tartelettes',
            prix: '2.90 €',
            description: 'lorem ipsum bla bla'
        },
        {
            image: macaronsRose,
            nom: 'Macarons',
            prix: '2.90 €',
            description: 'lorem ipsum bla bla'
        }

    ]
}