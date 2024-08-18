import PaginateLeftIcon from 'public/icons/pagination_left.svg'
import PaginateRightIcon from 'public/icons/pagination_right.svg'
import PaginateLeftDisabledIcon from 'public/icons/pagination_left_disabled.svg'
import PaginateRightDisabledIcon from 'public/icons/pagination_right_disabled.svg'
import { usePaginationContext } from '@/components/Pagination'

const LeftPagination = () => {
  const { currentPage, paginate } = usePaginationContext()!

  return currentPage > 1 ? (
    <PaginateLeftIcon onClick={() => paginate(currentPage - 1)} />
  ) : (
    <PaginateLeftDisabledIcon />
  )
}

const RightPagination = () => {
  const { currentPage, totalPage, paginate } = usePaginationContext()!
  return currentPage < totalPage ? (
    <PaginateRightIcon onClick={() => paginate(currentPage + 1)} />
  ) : (
    <PaginateRightDisabledIcon />
  )
}

const Pages = () => {
  const { pages, currentPage, paginate } = usePaginationContext()!

  return pages.map((page) => (
    <span
      key={page}
      className={`text-xs leading-5 ${page === currentPage ? 'underline' : ''}`}
      onClick={() => paginate(page)}
    >
      {page}
    </span>
  ))
}

const BoardPagination = () => {
  return (
    <div className="flex w-full cursor-default items-center justify-center gap-4 bg-gray-0 pb-12">
      <LeftPagination />
      <Pages />
      <RightPagination />
    </div>
  )
}

export default BoardPagination
