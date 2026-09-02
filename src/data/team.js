// Team roster as shown in the "Meet the Team" section.
// Array order sets the grid order: entries fill left-to-right, top-to-bottom.
// Photo filenames match the person in them.
//
// The ring/roleColor palette runs blue -> indigo -> purple -> cyan across the
// four cards, so it is tied to card position rather than to a person; moving
// someone between cards keeps that progression intact.
export const teamMembers = [
  {
    name: 'Joe Brophy',
    role: 'Co-Founder & CEO',
    image: '/joe.jpg',
    ring: 'border-blue-500/40 bg-blue-600/20 text-blue-400 shadow-blue-500/10',
    roleColor: 'text-blue-400'
  },
  {
    name: 'Dinesh',
    role: 'Co-Founder & CAIO',
    image: '/dinesh.jpg',
    ring: 'border-indigo-500/40 bg-indigo-600/20 text-indigo-400 shadow-indigo-500/10',
    roleColor: 'text-indigo-400'
  },
  {
    name: 'Malintha',
    role: 'Lead Enterprise AI Solutions Architect',
    image: '/malintha.jpg',
    ring: 'border-purple-500/40 bg-purple-600/20 text-purple-400 shadow-purple-500/10',
    roleColor: 'text-purple-400'
  },
  {
    name: 'Chamodya',
    role: 'Senior AI Solutions Engineer',
    image: '/chamodya.jpg',
    ring: 'border-cyan-500/40 bg-cyan-600/20 text-cyan-400 shadow-cyan-500/10',
    roleColor: 'text-cyan-400'
  }
]
