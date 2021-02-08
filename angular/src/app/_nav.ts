import { INavData } from '@coreui/angular';


export const navItemsSuper: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    class:'dashi',
    /*  icon: 'icon-speedometer',
     badge: {
       variant: 'info',
       text: 'NEW'
     } */
  },
  //comienza seccion2

  {
    name: 'Panel de control',
    url: '/panel',
    icon: 'fa fa-sliders',
    children: [
      {
        name: 'Empresas',
        url: '/empresas',
        icon: 'fa fa-building'
      },
      {
        name: 'Usuarios',
        url: '/user',
        icon: 'fa fa-user'
      }
    ]
  },


  {
    name: 'Área de Trabajo',
    url: '/panel',
    icon: 'fa fa-laptop ',
    children: [

      {
        name: 'Descarga Masiva',
        url: '/bulk-downloads',
        icon: 'fa fa-download '
      }
     
    ]

  }
   




  /* {
    title: true,
    name: 'Components'
  },
  {
    name: 'Procesos',
    url: '/buttons',
    icon: 'icon-cursor',
    children: [
      {
        name: 'dfgdfg',
        url: '/#',
        icon: 'icon-cursor'
      },
      {
        name: 'Dropddgdgfowdns',
        url: '/#',
        icon: 'icon-cursor'
      },
      {
        name: 'Brand Buttons',
        url: '/#',
        icon: 'icon-cursor'
      }
    ]
  },
  {
    name: 'Charts',
    url: '/charts',
    icon: 'icon-pie-chart'
  },
  {
    name: 'Icons',
    url: '/icons',
    icon: 'icon-star',
    children: [
      {
        name: 'CoreUI Icons',
        url: '/icons/coreui-icons',
        icon: 'icon-star',
        badge: {
          variant: 'success',
          text: 'NEW'
        }
      },
      {
        name: 'Flags',
        url: '/icons/flags',
        icon: 'icon-star'
      },
      {
        name: 'Font Awesome',
        url: '/icons/font-awesome',
        icon: 'icon-star',
        badge: {
          variant: 'secondary',
          text: '4.7'
        }
      },
      {
        name: 'Simple Line Icons',
        url: '/icons/simple-line-icons',
        icon: 'icon-star'
      }
    ]
  },
  {
    name: 'Notifications',
    url: '/notifications',
    icon: 'icon-bell',
    children: [
      {
        name: 'Alerts',
        url: '/notifications/alerts',
        icon: 'icon-bell'
      },
      {
        name: 'Badges',
        url: '/notifications/badges',
        icon: 'icon-bell'
      },
      {
        name: 'Modals',
        url: '/notifications/modals',
        icon: 'icon-bell'
      }
    ]
  },
  {
    name: 'Widgets',
    url: '/widgets',
    icon: 'icon-calculator',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
    divider: true
  }, */


  /* {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
    title: true,
    name: 'Theme'
  },
  {
    name: 'Colors',
    url: '/theme/colors',
    icon: 'icon-drop'
  },
  {
    name: 'Typography',
    url: '/theme/typography',
    icon: 'icon-pencil'
  },
  {
    title: true,
    name: 'Components'
  },
  {
    name: 'Base',
    url: '/base',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Cards',
        url: '/base/cards',
        icon: 'icon-puzzle'
      },
      {
        name: 'Carousels',
        url: '/base/carousels',
        icon: 'icon-puzzle'
      },
      {
        name: 'Collapses',
        url: '/base/collapses',
        icon: 'icon-puzzle'
      },
      {
        name: 'Forms',
        url: '/base/forms',
        icon: 'icon-puzzle'
      },
      {
        name: 'Navbars',
        url: '/base/navbars',
        icon: 'icon-puzzle'

      },
      {
        name: 'Pagination',
        url: '/base/paginations',
        icon: 'icon-puzzle'
      },
      {
        name: 'Popovers',
        url: '/base/popovers',
        icon: 'icon-puzzle'
      },
      {
        name: 'Progress',
        url: '/base/progress',
        icon: 'icon-puzzle'
      },
      {
        name: 'Switches',
        url: '/base/switches',
        icon: 'icon-puzzle'
      },
      {
        name: 'Tables',
        url: '/base/tables',
        icon: 'icon-puzzle'
      },
      {
        name: 'Tabs',
        url: '/base/tabs',
        icon: 'icon-puzzle'
      },
      {
        name: 'Tooltips',
        url: '/base/tooltips',
        icon: 'icon-puzzle'
      }
    ]
  },
  {
    name: 'Buttons',
    url: '/buttons',
    icon: 'icon-cursor',
    children: [
      {
        name: 'Buttons',
        url: '/buttons/buttons',
        icon: 'icon-cursor'
      },
      {
        name: 'Dropdowns',
        url: '/buttons/dropdowns',
        icon: 'icon-cursor'
      },
      {
        name: 'Brand Buttons',
        url: '/buttons/brand-buttons',
        icon: 'icon-cursor'
      }
    ]
  },
  {
    name: 'Charts',
    url: '/charts',
    icon: 'icon-pie-chart'
  },
  {
    name: 'Icons',
    url: '/icons',
    icon: 'icon-star',
    children: [
      {
        name: 'CoreUI Icons',
        url: '/icons/coreui-icons',
        icon: 'icon-star',
        badge: {
          variant: 'success',
          text: 'NEW'
        }
      },
      {
        name: 'Flags',
        url: '/icons/flags',
        icon: 'icon-star'
      },
      {
        name: 'Font Awesome',
        url: '/icons/font-awesome',
        icon: 'icon-star',
        badge: {
          variant: 'secondary',
          text: '4.7'
        }
      },
      {
        name: 'Simple Line Icons',
        url: '/icons/simple-line-icons',
        icon: 'icon-star'
      }
    ]
  },
  {
    name: 'Notifications',
    url: '/notifications',
    icon: 'icon-bell',
    children: [
      {
        name: 'Alerts',
        url: '/notifications/alerts',
        icon: 'icon-bell'
      },
      {
        name: 'Badges',
        url: '/notifications/badges',
        icon: 'icon-bell'
      },
      {
        name: 'Modals',
        url: '/notifications/modals',
        icon: 'icon-bell'
      }
    ]
  },
  {
    name: 'Widgets',
    url: '/widgets',
    icon: 'icon-calculator',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
    divider: true
  }, */
 /*  {
    title: true,
    name: 'Extras',
  }, */
  /* {
    name: 'Pages',
    url: '/pages',
    icon: 'icon-star',
    children: [
      {
        name: 'Login',
        url: '/login',
        icon: 'icon-star'
      },
      {
        name: 'Register',
        url: '/register',
        icon: 'icon-star'
      },
      {
        name: 'Error 404',
        url: '/404',
        icon: 'icon-star'
      },
      {
        name: 'Error 500',
        url: '/500',
        icon: 'icon-star'
      }
    ]
  },
  {
    name: 'Disabled',
    url: '/dashboard',
    icon: 'icon-ban',
    badge: {
      variant: 'secondary',
      text: 'NEW'
    },
    attributes: { disabled: true },
  }, */
];

export const navItemsAdmin: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    /*  icon: 'icon-speedometer',
     badge: {
       variant: 'info',
       text: 'NEW'
     } */
  },
  //comienza seccion2

  {
    name: 'Panel de control',
    url: '/panel',
    icon: 'fa fa-sliders',
    children: [
      {
        name: 'Usuarios',
        url: '/user',
        icon: 'fa fa-user',
      },
      {
        name: 'Grupos',
        url: '/groups',
        icon: 'fa fa-users'
      },
      {
        name: 'Indices',
        url: '/indexes',
        icon: 'icon-pencil'
      },
      {
        name: 'Clases/Documentos',
        url: '/documents-type',
        icon: 'fa fa-file'
      },
      {
        name: 'Listas',
        url: '/list',
        icon: 'fa fa-list'
      },
      {
        name: 'Control/Acceso',
        url: '/manage-permissions',
        icon: 'fa fa-lock'
      },
      {
        name: 'Enlazar/Documentos',
        url: '/linking-documents',
        icon: 'fa fa-link'
      }
      
    ]
  },
  {
    name: 'Área de Trabajo',
    url: '/panel',
    icon: 'fa fa-laptop ',
    children: [
      {
        name: 'Documentos',
        url: '/view-documents-type',
        icon: 'fa fa-files-o'
      },
      {
        name: 'Doc/Retirados',
        url: '/check-documents',
        icon: 'fa fa-lock'
      },
      {
        name: 'Papelera',
        url: '/reciclaje',
        icon: 'fa fa-trash'
      },
    ]
  },

];


export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    /*  icon: 'icon-speedometer',
     badge: {
       variant: 'info',
       text: 'NEW'
     } */
  },
  {
    name: 'Área de Trabajo',
    url: '/panel',
    icon: 'fa fa-laptop ',
    children: [
      
      {
        name: 'Documentos',
        url: '/view-documents-type',
        icon: 'fa fa-file-o'
      },
      {
        name: 'Doc/Retirados',
        url: '/check-documents',
        icon: 'fa fa-lock'
      }
    ]

  },
  //comienza seccion2


 


];

export const navItemsEdit: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    /*  icon: 'icon-speedometer',
     badge: {
       variant: 'info',
       text: 'NEW'
     } */
  },

  //comienza seccion2
  {
    title: true,
    name: 'PANEL DE CONTROL'
  },
  {
    name: 'Indices',
    url: '/indexes',
    icon: 'icon-pencil'
  },
  {
    name: 'Clases/Documentos',
    url: '/documents-type',
    icon: 'fa fa-file'
  },
  {
    name: 'Listas',
    url: '/list',
    icon: 'fa fa-list'
  },
  {
    name: 'Papelera',
    url: '/reciclaje',
    icon: 'fa fa-trash'
  },
  {
    name: 'Mensajes',
    url: '/mensagges',
    icon: 'fa fa-envelope-o'
  },
  {
    name: 'Doc/Extraídos',
    url: '/check-documents',
    icon: 'fa fa-file-archive-o'
  },
  {
    name: 'Discusiones',
    url: '/discussions',
    icon: 'fa fa-comments'
  },
  {
    name: 'Marcadores',
    url: '/bookmarks',
    icon: 'fa fa-star'
  },
  {
    name: 'Buscar notas',
    url: '/search-notes',
    icon: 'fa fa-sticky-note-o'
  },
  {
    name: 'Reg./Excepciones',
    url: '/view-exceptions',
    icon: 'icon-pencil'
  }
   


];