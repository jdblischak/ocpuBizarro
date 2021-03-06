% Generated by roxygen2: do not edit by hand
% Please edit documentation in R/bizarro.R
\name{bizarro}
\alias{bizarro}
\alias{bizarro.default}
\alias{bizarro.numeric}
\alias{bizarro.logical}
\alias{bizarro.character}
\alias{bizarro.factor}
\alias{bizarro.data.frame}
\title{Bizarro}
\usage{
bizarro(x)

\method{bizarro}{default}(x)

\method{bizarro}{numeric}(x)

\method{bizarro}{logical}(x)

\method{bizarro}{character}(x)

\method{bizarro}{factor}(x)

\method{bizarro}{data.frame}(x)
}
\arguments{
\item{x}{Input}
}
\description{
Return a bizarre result based on the input object's class.
}
\details{
The function \code{bizarro} is from \href{https://jennybryan.org/}{Jenny
Bryan's} presentation
\href{https://www.youtube.com/watch?v=7oyiPBjLAWY}{"Code Smells and Feels"}
from \href{https://user2018.r-project.org/}{useR! 2018} in Brisbane, QLD
(\href{https://github.com/jennybc/code-smells-and-feels/blob/74186ff2b0f7c41218719f7ae67a86362956d10b/R/11_biz_S3.R}{source}).
}
\examples{
  bizarro("The quick brown fox jumps over the lazy dog")
  bizarro(1:5)
  bizarro(-1:-5)
  bizarro(TRUE)
  bizarro(iris[1:3, 1:3])

}
