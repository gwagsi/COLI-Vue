export default () => {
  return new Promise(function(resolve) {
    resolve({
      common: {
        title: 'Un exemple simple',
        subtitle: "C'est une page blanche . .",
        error_with_status: "Une erreur s'est produite sur le serveur",
        '404': 'Cette page est introuvable.',
        '404_subtitle': 'Vous pouvez soit rester et vous détendre ici, soit revenir au début.',
        back: 'de retour à la maison',
        error_without_status: "Une erreur s'est produite sur le serveur",
        contact_title: 'Devis de projet gratuit',
        contact_subtitle:
          'Avez-vous des questions? Êtes-vous prêt à réduire vos coûts et à générer de nouveaux revenus ? Ou vous voulez simplement dire bonjour ? Envoyez-nous un message.',
        form_name: 'Quel est ton nom? *',
        form_email: "C'est quoi ton email ? *",
        form_phone: 'Quel est votre numéro de téléphone?',
        form_company: 'Quelle est votre entreprise ?',
        form_message: 'Ecrivez votre message ici',
        form_terms: "J'ai lu et j'accepte les Conditions d'utilisation",
        form_privacy: 'Services et politique de confidentialité *',
        form_send: 'Envoyer le message',
        accept: 'Accepter',
        en: 'English',
        fr: 'French',
        notif_msg: "Il s'agit d'un exemple de message couramment utilisé pour transmettre des informations importantes aux visiteurs ou aux utilisateurs. Veuillez cliquer sur le bouton à côté pour fermer ce message."
      },
      agencyLanding: {
        header_about: 'sur',
        header_services: 'prestations de service',
        'header_our-expertise': 'notre expertise',
        header_testimonials: 'témoignages',
        'header_case-studies': 'études de cas',
        header_our_office: ' notre bureau',
        header_contact: ' Contactez',
        header_language: ' Langue',
        header_theme: 'mode thème',
        header_dark: 'foncé',
        header_light: 'lumière',
        banner_title: "Créer une solution d'entreprise",
        banner_subtitle: "Expertise qui couvre l'industrie de la technologie, des services informatiques au développement de logiciels, au marketing et à la conception Web, nous sommes la seule entreprise capable de répondre à tous les besoins technologiques de votre entreprise.",
        banner_button: 'écrivez-nous',
        about_title: 'À propos de nous',
        about_subtitle: 'Grâce à notre grande capacité, nous osons dire que nous sommes différents.',
        about_employee: 'employé',
        about_projects: 'projets',
        about_client: 'clients',
        about_quote: "Il laisse un goût doux-amer qui s'appelle le blues",
        services_title: 'Nos services',
        services_button: 'voir le détail',
        expertise_title: 'notre expertise',
        expertise_subtitle: 'Un projet réussi se construit avec une équipe performante.',
        expertise_paragraph:
          " C'est pourquoi nous mettons à votre disposition les ressources humaines dont vous avez besoin pour vous constituer chaque fois que vous en avez besoin. Nos équipes on_shoring & near offshoring sont formées et supervisées au sein de Nous. Votre équipe est dédiée à vos projets. Et l'équipe est flexible !",
        testimonial_title: 'témoignages clients',
        case_title: 'Études de cas',
        cta_title: "Prêt à commencer? ",
        cta_subtitle: "L'équipe Best Tech n'est pas née instantanément, elle est faite ...",
        cta_btn: 'Nous contacter',
        office_title: 'Notre bureau',
        office_head: 'Siège social',
        footer_paragraph: 'Vous aider est notre priorité absolue.'
      }
    })
  })
}
