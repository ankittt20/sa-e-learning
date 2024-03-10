import React from 'react'
import { FaSearch } from 'react-icons/fa'

type Props = {}

const ManageSessions = (props: Props) => {
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-lg font-semibold">Manage Session & Articles</h1>
      <div className="flex justify-center items-center bg-accent-blue text-primary-100 h-7 w-7 rounded-sm">
        <FaSearch />
      </div>
    </div>
  )
}

export default ManageSessions