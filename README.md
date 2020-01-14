# ocpuBizarro

<p>
  The <a href="https://www.opencpu.org/">OpenCPU</a> project by <a
  href="https://twitter.com/opencpu">Jeroen Ooms</a> provides the R package <a
  href="https://cran.r-project.org/package=opencpu">opencpu</a> and the
  JavaScript Client <a
  href="https://github.com/opencpu/opencpu.js">opencpu.js</a> to make R packages
  accessible from a webpage. One of its nicest features is that it preserves the
  data types when transferring from JavaScript to R via JSON. This means that an
  R package author doesn't need to provide any wrapper functionality to process
  JSON.
</p>
<p>
  This example app, ocpuBizarro, demonstrates this feature using <a
  href="https://jennybryan.org/">Jenny Bryan's</a> bizarro function from her
  presentation <a href="https://www.youtube.com/watch?v=7oyiPBjLAWY">"Code
  Smells and Feels"</a> at <a href="https://user2018.r-project.org/">useR!
  2018</a> in Brisbane, QLD. The original file I copied and modified is <a
  href="https://github.com/jennybc/code-smells-and-feels/blob/74186ff2b0f7c412187f7ae67a86362956d10b/R/11_biz_S3.R">11_biz_S3.R</a>.
  The function uses the S3 OO system to dispatch a different method based on
  the object's type. The examples below pass a JavaScript string, number,
  and boolean to bizarro via OpenCPU. Each time the correct S3 method is
  dispatched based on the object's type in JavaScript.
</p>

## Local installation

To install and run on your local machine, run the following in the R console.
The app should automatically launch in your default browser.

```
devtools::install()
library(ocpuBizarro)
opencpu::ocpu_start_app("ocpuBizarro", no_cache = TRUE)
```

## License and attribution

This package is released under the [Apache License 2.0][apache2]. This is the
same license as the included file opencpu.js.

[apache2]: https://www.apache.org/licenses/LICENSE-2.0.html

The bizarro function was written by Jenny Bryan.
The copyright of the bundled jQuery file is owned by the jQuery Foundation.
See the file [DESCRIPTION](DESCRIPTION) for more details.
