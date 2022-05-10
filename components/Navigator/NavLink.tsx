import Link from 'next/link'

type HeaderLinkProps = {
  children: any
  href: string
}

const NavLink = ({ children, href }: HeaderLinkProps) => {
  return (
    <Link href={href}>
      <a className={'block py-2 pr-4 pl-3 md:p-0 hover:underline'}>
        {children}
      </a>
    </Link>
  )
}

export default NavLink
