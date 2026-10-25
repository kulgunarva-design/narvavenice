(() => {
const form=document.getElementById('story-form');
if(!form)return;
const inputs=Array.from(form.querySelectorAll('input[type="file"]'));
const errors={ru:'Общий размер вложений больше 10 МБ. Уменьшите файлы или отправьте меньше вложений.',en:'Attachments exceed 10 MB in total. Reduce their size or select fewer files.',et:'Manuste kogumaht ületab 10 MB. Vähenda failide suurust või vali vähem faile.'};
function validate(){const total=inputs.reduce((sum,input)=>sum+Array.from(input.files||[]).reduce((s,f)=>s+f.size,0),0);inputs.forEach(input=>input.setCustomValidity(''));const invalid=total>10000000;if(invalid)inputs[0].setCustomValidity(errors[document.documentElement.lang]||errors.ru);return !invalid;}
inputs.forEach(input=>input.addEventListener('change',validate));
new MutationObserver(validate).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
form.addEventListener('submit',event=>{if(!validate()){event.preventDefault();form.reportValidity();}});
})();
