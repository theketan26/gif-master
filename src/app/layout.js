import './globals.css';


export const metadata = {
	title: 'GIF Master',
	description: 'Search GIF for fun',
}


export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className = 'w-full h-full bg-gradient-to-l from-green-700 via-cyan-800 to-slate-800 overflow-x-hidden'>
				{children}
			</body>
		</html>
	)
}
