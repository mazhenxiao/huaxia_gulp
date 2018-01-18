const gulp = require("gulp");
const rename = require("gulp-rename");
const minifycss = require('gulp-minify-css');
const uglify = require("gulp-uglify");
const imagemin = require("gulp-imagemin");
const concat = require("gulp-concat");
const concatcss = require("gulp-concat-css");
const data = require("./pathConfig.json");
const notify = require("gulp-notify");
const gzip = require('gulp-gzip');
const clean = require("gulp-clean");
const gulpCopy = require('gulp-copy');
let {
  css,
  js,
  cssmin,
  jsmin,
  src,
  copyFile,
  toFile
} = data;
let {
  DCChartLayout: DCChartLayout_css,
  DCLayout: DCLayout_css,
  DCMainLayout: DCMainLayout_css,
  DCMainLayoutNoPic: DCMainLayoutNoPic_css,
  DCSubLayout: DCSubLayout_css,
  Layout: Layout_css,
  MainLayout: MainLayout_css,
  MainLayoutNoPic: MainLayoutNoPic_css,
  SubLayout: SubLayout_css
} = css;
let {
  DCChartLayout: DCChartLayout_js,
  DCLayout: DCLayout_js,
  DCMainLayout: DCMainLayout_js,
  DCMainLayout2: DCMainLayout2_js,
  DCMainLayoutNoPic: DCMainLayoutNoPic_js,
  DCSubLayout: DCSubLayout_js,
  Layout: Layout_js,
  MainLayout: MainLayout_js,
  MainLayout2:MainLayout2_js,
  MainLayoutNoPic: MainLayoutNoPic_js,
  SubLayout: SubLayout_js
} = js;
gulp.task("clear",arg=>{
  return gulp.src([cssmin,jsmin])
             .pipe(clean())
             .pipe(notify({
              message: "删除sucess"
            }))
})
gulp.task("copy",arg=>{
  return gulp.src(copyFile)
             .pipe(gulp.dest(toFile))
             .pipe(notify({
              message: "copy完成"
            }))
})
gulp.task("DCChartLayout_css", arg => {
   
   return gulp.src(DCChartLayout_css)
    .pipe(concat("DCChartLayout_css.css"))
    .pipe(rename("[name].min.css"))
    .pipe(minifycss())
    .pipe(gulp.dest(cssmin))
    .pipe(notify({
      message: "DCChartLayout_css处理完成"
    }))
})
gulp.task("DCLayout_css", arg => {

  return gulp.src(DCLayout_css)
   .pipe(concat("DCLayout_css.css"))
   .pipe(gulp.dest(cssmin))
   .pipe(minifycss())
    .pipe(rename(path => {
     console.log(path);
     path.basenam += "-min"
   }))
   .pipe(gulp.dest(cssmin))
   .pipe(notify({
     message: "DCLayout_css处理完成"
   }))
})
gulp.task("DCMainLayout_css", arg => {

  return gulp.src(DCMainLayout_css)
   .pipe(minifycss())
   .pipe(concatcss("DCMainLayout_css.css"))
   .pipe(gulp.dest(cssmin))
   .pipe(gzip())
   .pipe(gulp.dest(cssmin))
   .pipe(notify({
     message: "DCMainLayout_css处理完成"
   }))
})
 gulp.task("DCMainLayoutNoPic_css", arg => {

  return gulp.src(DCMainLayoutNoPic_css)
   .pipe(concat("DCMainLayoutNoPic_css.css"))
   .pipe(gulp.dest(cssmin))
   .pipe(minifycss())
    .pipe(rename(path => {
     console.log(path);
     path.basenam += "-min"
   }))
   .pipe(gulp.dest(cssmin))
   .pipe(notify({
     message: "DCMainLayoutNoPic_css处理完成"
   }))
}) 
gulp.task("DCSubLayout_css", arg => {

  return gulp.src(DCSubLayout_css)
   .pipe(concat("DCSubLayout_css.css"))
   .pipe(gulp.dest(cssmin))
   .pipe(minifycss())
    .pipe(rename(path => {
     console.log(path);
     path.basenam += "-min"
   }))
   .pipe(gulp.dest(cssmin))
   .pipe(notify({
     message: "DCSubLayout_css处理完成"
   }))
})
gulp.task("Layout_css", arg => {

  return gulp.src(DCChartLayout_css)
   .pipe(concat("Layout_css.css"))
   .pipe(gulp.dest(cssmin))
   .pipe(minifycss())
    .pipe(rename(path => {
     console.log(path);
     path.basenam += "-min"
   }))
   .pipe(gulp.dest(cssmin))
   .pipe(notify({
     message: "Layout_css处理完成"
   }))
})
gulp.task("MainLayout_css", arg => {
  return gulp.src(MainLayout_css)
   .pipe(minifycss())
   .pipe(concatcss("MainLayout_css.css"))
   .pipe(gulp.dest(cssmin))
   .pipe(gzip())
   .pipe(gulp.dest(cssmin))
   .pipe(notify({
     message: "MainLayout_css处理完成"
   }))
})
gulp.task("MainLayoutNoPic_css", arg => {

  return gulp.src(MainLayoutNoPic_css)
   .pipe(concat("MainLayoutNoPic_css.css"))
   .pipe(gulp.dest(cssmin))
   .pipe(minifycss())
    .pipe(rename(path => {
     console.log(path);
     path.basenam += "-min"
   }))
   .pipe(gulp.dest(cssmin))
   .pipe(notify({
     message: "MainLayoutNoPic_css处理完成"
   }))
})
gulp.task("SubLayout_css", arg => {

  return gulp.src(DCChartLayout_css)
   .pipe(concat("SubLayout_css.css"))
   .pipe(gulp.dest(cssmin))
   .pipe(minifycss())
    .pipe(rename(path => {
     console.log(path);
     path.basenam += "-min"
   }))
   .pipe(gulp.dest(cssmin))
   .pipe(notify({
     message: "SubLayout_css处理完成"
   }))
})

////////////////////////////////////////////////////////////js//////////////////////
gulp.task("MainLayout_js", arg => {
  return gulp.src(MainLayout_js)
   .pipe(uglify({"mangle":true}))
   .pipe(concat("MainLayout_js.js"))
   .pipe(gulp.dest(jsmin))
   .pipe(gzip())
   .pipe(gulp.dest(jsmin))
   .pipe(notify({
     message: "SubLayout_js处理完成"
   }))
})
//部分页面不能压缩更改变量名称，因为页面有引用
gulp.task("MainLayout2_js", arg => {
  return gulp.src(MainLayout2_js)
   .pipe(uglify({"mangle":false}))
   .pipe(concat("MainLayout2_js.js"))
   .pipe(gulp.dest(jsmin))
   .pipe(gzip())
   .pipe(gulp.dest(jsmin))
   .pipe(notify({
     message: "SubLayout2_js处理完成"
   }))
})

gulp.task("DCMainLayout_js", arg => {
  return gulp.src(MainLayout_js)
   .pipe(uglify({"mangle":true}))
   .pipe(concat("DCMainLayout_js.js"))
   .pipe(gulp.dest(jsmin))
   .pipe(gzip())
   .pipe(gulp.dest(jsmin))
   .pipe(notify({
     message: "DCMainLayout_js处理完成"
   }))
})
//部分页面不能压缩更改变量名称，因为页面有引用
gulp.task("DCMainLayout2_js", arg => {
  return gulp.src(DCMainLayout2_js)
   .pipe(uglify({"mangle":false}))
   .pipe(concat("DCMainLayout2_js.js"))
   .pipe(gulp.dest(jsmin))
   .pipe(gzip())
   .pipe(gulp.dest(jsmin))
   .pipe(notify({
     message: "DCMainLayout_js处理完成"
   }))
})

//目前下面路径是经过一个个点击校验了的，老项目一定要谨慎。
let cssTask = ["MainLayout_css","DCMainLayout_css"];
let jsTask=["MainLayout_js","MainLayout2_js","DCMainLayout_js","DCMainLayout2_js"];

gulp.task("default",[...cssTask,...jsTask]);
/* gulp.task("default", 
["DCChartLayout_css","DCLayout_css","DCMainLayout_css",
"DCMainLayoutNoPic_css","DCSubLayout_css","Layout_css",
"MainLayout_css","MainLayoutNoPic_css","SubLayout_css"]); */