import Image from 'next/image';
import Link from 'next/link';
import Enquiries from '../components/enquiries';
import PLAYBACKTeam from './team';
import PLAYBACKHeader from './header';

export default function Playback() {
    return (

        <section className="text-white">
            <PLAYBACKHeader />
            <PLAYBACKTeam />
            <Enquiries />
        </section>
    )
}
