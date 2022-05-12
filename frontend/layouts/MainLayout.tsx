import React from 'react'
import clsx from 'clsx'
import LeftMenu from '../components/LeftMenu'
import SideComments from '../components/SideComments'

interface MainLayoutProps {
  hideComments?: boolean
  contentFullWidth?: boolean
  className?: string
}

const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  contentFullWidth,
  hideComments,
  className,
}) => {
  return (
    <div className={clsx('wrapper', className)}>
      <div className="leftSide">
        <LeftMenu />
      </div>
      <div className={clsx('content', { 'content--full': contentFullWidth })}>
        {children}
      </div>
      {!hideComments && (
        <aside className="rightSide">
          <SideComments />
        </aside>
      )}
    </div>
  )
}

export default MainLayout
