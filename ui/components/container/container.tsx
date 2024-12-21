import { ReactNode } from 'react';

export default function Container(props: { children: ReactNode }) {
    return (
        <div className='align-center px-5 py-5 gap-2 flex flex-col min-h-screen items-start justify-center overflow-auto bg-slate-100 md:items-center lg:items-center dark:bg-dark-background'>
            {props.children}
        </div>
    );
}
