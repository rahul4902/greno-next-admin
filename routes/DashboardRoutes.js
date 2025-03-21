import { v4 as uuid } from 'uuid';


export const DashboardMenu = [
	{
		id: uuid(),
		title: 'Dashboard',
		icon: 'home',
		link: '/admin'
	},
	{
		id: uuid(),
		title: 'Test',
		icon: 'package',
		link: '/admin/dashboard/test',		
	},	
	{
		id: uuid(),
		title: 'MASTER & OTHERS',
		grouptitle: true
	},
	{
		id: uuid(),
		title: 'Masters',
		icon: 'layers',
		children: [
			{ id: uuid(), link: '/admin/category', name: 'Category' },
			{ id: uuid(), link: '/admin/sampletypes', name: 'Sample Type' },
			{ id: uuid(), link: '/admin/banner', name: 'Banner' },
			
			{ id: uuid(), link: '/pages/profile', name: 'Profile' },
			{ id: uuid(), link: '/pages/settings', name: 'Settings'},
			{ id: uuid(), link: '/pages/billing', name: 'Billing' },
			{ id: uuid(), link: '/pages/pricing', name: 'Pricing'},
			{ id: uuid(), link: '/not-found', name: '404 Error' }
		]
	},	
	{
		id: uuid(),
		title: 'Authentication',
		icon: 'lock',
		children: [
			{ id: uuid(), link: '/authentication/sign-in', name: 'Sign In' },
			{ id: uuid(), link: '/authentication/sign-up', name: 'Sign Up' },
			{ id: uuid(), link: '/authentication/forget-password', name: 'Forget Password'}			
		]
	},
	
	{
		id: uuid(),
		title: 'UI COMPONENTS',
		grouptitle: true
	},	
	{
		id: uuid(),
		title: 'Components',
		icon: 'monitor',
		children: [
			{ id: uuid(), link: '/components/accordions', name: 'Accordions' },
			{ id: uuid(), link: '/components/alerts', name: 'Alerts' },
			{ id: uuid(), link: '/components/badges', name: 'Badges' },
			{ id: uuid(), link: '/components/breadcrumbs', name: 'Breadcrumbs' },
			{ id: uuid(), link: '/components/buttons', name: 'Buttons' },
			{ id: uuid(), link: '/components/button-group', name: 'ButtonGroup' },
			{ id: uuid(), link: '/components/cards', name: 'Cards' },
			{ id: uuid(), link: '/components/carousels', name: 'Carousel' },
			{ id: uuid(), link: '/components/close-button', name: 'Close Button' },
			{ id: uuid(), link: '/components/collapse', name: 'Collapse' },
			{ id: uuid(), link: '/components/dropdowns', name: 'Dropdowns' },
			{ id: uuid(), link: '/components/list-group', name: 'Listgroup' },
			{ id: uuid(), link: '/components/modal', name: 'Modal' },
			{ id: uuid(), link: '/components/navs', name: 'Navs' },
			{ id: uuid(), link: '/components/navbar', name: 'Navbar' },
			{ id: uuid(), link: '/components/offcanvas', name: 'Offcanvas' },
			{ id: uuid(), link: '/components/overlays', name: 'Overlays' },
			{ id: uuid(), link: '/components/pagination', name: 'Pagination' },
			{ id: uuid(), link: '/components/popovers', name: 'Popovers' },
			{ id: uuid(), link: '/components/progress', name: 'Progress' },
			{ id: uuid(), link: '/components/spinners', name: 'Spinners' },
			{ id: uuid(), link: '/components/tables', name: 'Tables' },
			{ id: uuid(), link: '/components/toasts', name: 'Toasts' },
			{ id: uuid(), link: '/components/tooltips', name: 'Tooltips' }
		]
	}
];
// export const DashboardMenu = [
// 	{
// 		id: uuid(),
// 		title: 'Dashboard',
// 		icon: 'home',
// 		link: '/'
// 	},
// 		{
// 		id: uuid(),
// 		title: 'Our Tests',
// 		icon: 'package',
// 		children: [
// 			{ id: uuid(), link: '/test', name: 'Test' },
// 			{ id: uuid(), link: '/custom/settings', name: 'Package'}
// 		]
// 	},	
// ];

export default DashboardMenu;
