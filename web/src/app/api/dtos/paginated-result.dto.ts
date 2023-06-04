export interface PaginatedResultDTO<T> {
    data: Array<T>;
    currentPage: number;
    pageSize: number;
    totalPages: number;
}