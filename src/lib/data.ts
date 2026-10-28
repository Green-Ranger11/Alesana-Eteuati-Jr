import miracle from './assets/logos/miracle.svg';
import vodafone from './assets/logos/voda.png';
import usp from './assets/logos/usp.png';
import mlh from './assets/logos/mlh.svg';
import csl from './assets/logos/csl.png';

export const site = {
	name: 'Alesana Eteuati Jr',
	url: 'https://alesanajr.ws',
	handle: 'alesana',
	role: 'Senior Software Developer @ Vodafone Samoa',
	about:
		"Talofa lava! I'm a full stack developer from Samoa, mostly writing Go and TypeScript with SvelteKit. I live in the terminal on Arch Linux and Hyprland, with Neovim, tmux and Quickshell.",
	skills: [
		'Go',
		'TypeScript',
		'SvelteKit',
		'React',
		'Next.js',
		'Node.js',
		'PocketBase',
		'PostgreSQL',
		'Supabase',
		'Tailwind CSS',
		'Python',
		'Docker',
		'C++ / Qt'
	],
	links: [
		{ label: 'github', href: 'https://github.com/Green-Ranger11' },
		{ label: 'linkedin', href: 'https://www.linkedin.com/in/alesana-eteuati-jr' },
		{ label: 'email', href: 'mailto:junior.eteuati@gmail.com' }
	]
};

export const experience = [
	{
		org: 'Miracle Trade',
		href: 'https://www.miracletrade.com',
		logo: miracle,
		details: [
			'Build the web trading terminal in Next.js and React, trading across several exchanges from one interface.',
			'Build backend services in Go, with automated deploys, smoke tests and rollback.',
			'Work on the Android and iOS app in React Native and internal tools in SvelteKit.'
		],
		roles: [{ title: 'Full Stack Developer', dates: 'Jan 2026 - Present' }]
	},
	{
		org: 'Vodafone Samoa',
		href: 'https://vodafone.com.ws',
		logo: vodafone,
		details: [
			'Built the eSIM platform that made Vodafone Samoa the first carrier in Samoa with eSIM support, including online eSIM sales for tourists.',
			'Launched the online shop with card checkout and in-store pickup, so customers overseas can buy for family in Samoa.',
			'Build the internal staff apps for bookings, vouchers, promotions and ticketing in Go, PocketBase and SvelteKit.',
			'Build data pipelines and dashboards for network usage reporting in Go and PostgreSQL.',
			'Set up and customise the HR system, and build SMS and customer portal platforms.'
		],
		roles: [
			{ title: 'Senior Software Developer', dates: 'Jan 2023 - Present' },
			{ title: 'Software Developer', dates: 'Aug 2022 - Dec 2023' }
		]
	},
	{
		org: 'University of the South Pacific',
		href: 'https://www.usp.ac.fj',
		logo: usp,
		roles: [{ title: 'Industry Career Mentor', dates: 'Apr 2022 - Aug 2022' }]
	},
	{
		org: 'Major League Hacking',
		href: 'https://mlh.com',
		logo: mlh,
		details: [
			'Went from the Pre-Fellowship to the Explorer and Open Source tracks.',
			'Contributed to can-merge, a CLI that checks whether a pull request can be merged from the status of its checks, using the GitHub GraphQL API.',
			'Built GitDash in the Pre-Fellowship, a dashboard that tracks issues across all your repos and reminds you of deadlines.'
		],
		roles: [{ title: 'Open Source Fellow', dates: 'Aug 2021 - Apr 2022' }]
	},
	{
		org: 'Computer Services Limited',
		href: 'https://csl.ws',
		logo: csl,
		details: [
			"Built and deployed the e-filing system CSL won the tender for at Electric Power Corporation (Angular, .NET Core), replacing paper files with digital records indexed by EPC's filing scheme.",
			'Added search and permissions for who can upload, view, download and archive each document.'
		],
		roles: [{ title: 'Full Stack Developer', dates: 'Mar 2021 - Jul 2021' }]
	}
];

export const projects = [
	{
		title: 'Laumei',
		org: 'Open Source',
		dates: 'Oct 2026 - Present',
		summary:
			"Runs Quickshell configs on macOS. Provides Quickshell's QML modules on plain Qt, with the same CLI as qs, so Linux bars and pickers load unchanged.",
		stack: ['C++', 'Qt', 'QML'],
		href: 'https://github.com/Green-Ranger11/laumei'
	},
	{
		title: 'dotfiles',
		org: 'Open Source',
		dates: 'May 2025 - Present',
		summary:
			'Catppuccin Mocha setup for Arch + Hyprland and macOS: one Quickshell bar and pickers, yabai/skhd, kitty, tmux and Neovim.',
		stack: ['QML', 'Quickshell', 'Hyprland', 'Neovim'],
		href: 'https://github.com/Green-Ranger11/dotfiles'
	}
];

export const education = [
	{
		org: 'University of the South Pacific',
		href: 'https://www.usp.ac.fj',
		logo: usp,
		roles: [{ title: 'BSE Software Engineering', dates: '2017 - 2020' }]
	}
];
