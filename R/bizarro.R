# Original bizarro function from Jenny Bryan.
# I modified the version below:
# https://github.com/jennybc/code-smells-and-feels/blob/74186ff2b0f7c41218719f7ae67a86362956d10b/R/11_biz_S3.R

str_reverse <- function(x) {
  vapply(
    strsplit(x, ""),
    FUN = function(z) paste(rev(z), collapse = ""),
    FUN.VALUE = "")
}

#' Bizarro
#'
#' Return a bizarre result based on the input object's class.
#'
#' The function \code{bizarro} is from \href{https://jennybryan.org/}{Jenny
#' Bryan's} presentation
#' \href{https://www.youtube.com/watch?v=7oyiPBjLAWY}{"Code Smells and Feels"}
#' from \href{https://user2018.r-project.org/}{useR! 2018} in Brisbane, QLD
#' (\href{https://github.com/jennybc/code-smells-and-feels/blob/74186ff2b0f7c41218719f7ae67a86362956d10b/R/11_biz_S3.R}{source}).
#'
#' @param x Input
#'
#' @examples
#'   bizarro("The quick brown fox jumps over the lazy dog")
#'   bizarro(1:5)
#'   bizarro(-1:-5)
#'   bizarro(TRUE)
#'   bizarro(iris[1:3, 1:3])
#'
#' @rdname bizarro
#' @export
bizarro <- function(x) {
  UseMethod("bizarro")
}

#' @rdname bizarro
#' @export
bizarro.default <- function(x) {
  stop(
    "Don't know how to make bizzaro <",
    class(x)[[1]], ">",
    call. = FALSE
  )
}

#' @rdname bizarro
#' @export
bizarro.numeric <- function(x) -x

#' @rdname bizarro
#' @export
bizarro.logical <- function(x) !x

#' @rdname bizarro
#' @export
bizarro.character <- function(x) str_reverse(x)

#' @rdname bizarro
#' @export
bizarro.factor <- function(x) {
  levels(x) <- rev(levels(x))
  x
}

#' @rdname bizarro
#' @export
bizarro.data.frame <- function(x) {
  names(x) <- bizarro(names(x))
  x[] <- lapply(x, bizarro)
  x
}
