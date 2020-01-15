#!/usr/bin/env Rscript

devtools::install()
library(ocpuBizarro)
opencpu::ocpu_start_app("ocpuBizarro", no_cache = TRUE)
