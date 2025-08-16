import { createFileRoute, useRouter } from '@tanstack/react-router';
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
		<div>
			<h1 className='text-2xl font-bold'>Akatsuki Members</h1>

			{akatsuki.akatsuki.map((member: AkatsukiMember) => {
				return (
					<div
						key={member.id}
						className='flex flex-col items-center justify-center'
					>
						<h4>{member.name}</h4>
						{member.images && member.images[0] && (
							<img
								src={member.images[0]}
								alt={member.name}
								className='w-1/2 h-1/2 object-cover rounded-lg'
							/>
						)}
						<div className='flex flex-col items-center justify-center'>
							<p className='font-bold'>Nature Type</p>
							{member.natureType &&
								member.natureType.map((nature, index) => (
									<span
										key={index}
										className='px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full'
									>
										{nature}
									</span>
								))}
						</div>
						<div className='flex flex-col items-center justify-center'>
							<p className='font-bold'>Personal</p>
							<div className='flex flex-col items-center justify-center'>
								{member.personal &&
									member.personal.classification && (
										<span className='px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full'>
											{member.personal.classification}
										</span>
									)}
							</div>
							<div className='flex flex-col items-center justify-center'>
								{member.personal &&
									member.personal.kekkeiGenkai && (
										<span className='px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full'>
											{member.personal.kekkeiGenkai}
										</span>
									)}
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}
