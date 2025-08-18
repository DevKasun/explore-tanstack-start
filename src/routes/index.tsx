import { createFileRoute } from '@tanstack/react-router';
import { createServerFn } from '@tanstack/react-start';
import { AkatsukiMember } from '~/types';

export const getAkatsuki = createServerFn({
	method: 'GET',
}).handler(async () => {
	const response = await fetch('https://dattebayo-api.onrender.com/akatsuki');
	const data = await response.json();
	return data;
});

const akatsuki = await getAkatsuki();

export const Route = createFileRoute('/')({
	component: Home,
});

function Home() {
	console.log(akatsuki);
	return (
		<div className='mx-auto max-w-7xl px-4 py-6'>
			<h1 className='mb-6 text-2xl font-bold'>Akatsuki Members</h1>

			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
				{akatsuki.akatsuki.map((member: AkatsukiMember) => {
					return (
						<div
							key={member.id}
							className='grid gap-3 p-4 rounded-xl border border-gray-200 shadow-sm justify-items-center'
						>
							<h4 className='text-lg font-semibold text-center'>
								{member.name}
							</h4>
							{member.images && member.images[0] && (
								<img
									src={member.images[0]}
									alt={member.name}
									className='w-full aspect-[4/3] object-cover rounded-lg'
								/>
							)}
							<div className='grid gap-2 justify-items-center'>
								<p className='font-bold'>Nature Type</p>
								<div className='grid grid-cols-2 sm:grid-cols-3 gap-2'>
									{member.natureType &&
										member.natureType.map(
											(nature, index) => (
												<span
													key={index}
													className='px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full text-center'
												>
													{nature}
												</span>
											)
										)}
								</div>
							</div>
							<div className='grid gap-2 justify-items-center'>
								<p className='font-bold'>Personal</p>
								<div className='grid'>
									{member.personal &&
										member.personal.classification && (
											<span className='px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full text-center'>
												{member.personal.classification}
											</span>
										)}
								</div>
								<div className='grid grid-cols-2 sm:grid-cols-3 gap-2'>
									{member.personal &&
										member.personal.kekkeiGenkai &&
										Array.isArray(
											member.personal.kekkeiGenkai
										) &&
										member.personal.kekkeiGenkai.map(
											(ability, index) => (
												<span
													key={index}
													className='px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full text-center'
												>
													{ability}
												</span>
											)
										)}
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
