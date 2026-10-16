const C='assets/charts/';
const FIGS=[['10,772','Total visits recorded'],['598','Average visitors per Halloween'],['869','Busiest Halloween night (2011)'],['219','Quietest Halloween night (2020)']];
const S=[
{id:'01',name:'OVERVIEW',title:'FILE 01 — THE BIG PICTURE',head:'18 YEARS OF HALLOWEEN',figs:1,docs:[
{t:'Chart 01 — Halloween Attendance Over the Years',img:'chart_01_yearly_attendance.jpg',alt:'Line chart of the number of visitors by year, 2008 to 2025, peaking in 2011 and lowest in 2020.',p:['The busiest night was recorded in 2011, with 869 visitors, while 2020 had the lowest turnout, with just 219 visitors. The data reveal noticeable fluctuations rather than a consistent upward or downward trend.']},
{t:'Chart 02 — Year-over-Year Changes in Attendance',img:'chart_02_yearly_changes.jpg',alt:'Bar chart of year-over-year change in visitor numbers, 2009 to 2025.',p:['Visitor numbers increased in some years and declined in others. The largest year-over-year increase occurred in 2015, while the sharpest decrease was recorded in 2020.','These changes highlight how much Halloween attendance can vary from one year to the next.']}]},
{id:'02',name:'TIME PATTERNS',title:'FILE 02 — TIME PATTERNS',docs:[
{t:'Chart 03 — Average Visitors by Time Interval',img:'chart_03_average_by_time.jpg',alt:'Bar chart of average visitors by time period from before 6pm to 8:15pm.',p:['This chart compares the average number of arrivals during the recorded time intervals across 18 Halloween nights. The busiest half-hour periods tend to fall between 6:30 PM and 7:30 PM.'],n:'Note: The period after 8:00 PM lasts only 15 minutes, while the period before 6:00 PM has no fixed duration.'},
{t:'Chart 04 — Halloween Attendance Heatmap',img:'chart_04_heatmap.png',wide:1,alt:'Heatmap table of visitor counts by year, 2008 to 2025, and time interval; darker cells mean more arrivals.',p:['The heatmap presents visitor counts by year and time interval. Darker cells represent larger numbers of arrivals, making periods of high attendance easier to identify.']}]},
{id:'03',name:'RECORD YEARS',title:'FILE 03 — RECORD YEARS',years:1,docs:[
{t:'Chart 05 — Comparing 2011, 2020 and 2025',img:'chart_05_year_comparison.jpg',alt:'Line chart comparing visitors per time interval in 2011, 2020 and 2025.',p:['These three years represent very different patterns of Halloween attendance.','2011 recorded the highest overall attendance, 2020 had the lowest, and 2025 included the busiest individual half-hour interval in the dataset.']},
{t:'Chart 06 — Cumulative Attendance: 2011, 2020 and 2025',img:'chart_06_cumulative.jpg',alt:'Line chart of cumulative visitors through the evening in 2011, 2020 and 2025.',p:['This chart shows how the recorded visitor totals accumulated as the evening progressed.']}]},
{id:'04',name:'WEATHER',title:'FILE 04 — DOES WEATHER AFFECT HALLOWEEN ATTENDANCE?',docs:[
{t:'Chart 07 — Evening Temperature vs. Halloween Attendance',img:'chart_07_weather.jpg',alt:'Scatter plot of evening temperature against total visitors, one point per Halloween night.',p:['Each point represents one Halloween night. Its horizontal position indicates the mean of two evening temperature observations, while its vertical position represents the total visitor count.','The chart does not reveal a clear, consistent increase in attendance as temperatures rise.','For example, 2020 and 2025 had similar evening temperatures but very different visitor totals.','Rain was reported during selected observations in several years, and snow was reported in 2023.']}]},
{id:'05',name:'CALENDAR',title:'FILE 05 — DOES THE DAY OF THE WEEK MATTER?',docs:[
{t:'Chart 08 — Weekend vs. Weekday Attendance by Year',img:'chart_08_weekend_weekday.jpg',alt:'Bar chart of attendance by year, coloured by weekend or weekday Halloween.',p:['This chart distinguishes Halloween nights that occurred on weekends from those that fell on weekdays. Being a weekend does not automatically correspond to higher attendance in this dataset.']},
{t:'Chart 09 — Average Visitors by Day of the Week',img:'chart_09_weekday_averages.jpg',alt:'Bar chart of average visitors for each day of the week.',p:['Monday had the highest average attendance in the observed period. However, each day of the week appears only two or three times in the dataset, so these averages should not be treated as reliable predictions.']}]}];
const $=s=>document.querySelector(s),win=$('#win'),icons=$('#icons');let cur=null,di=0,last=null;
const ic=['M10 30h40l8-10h42v62H10z','M20 14h70v70H20zM32 30h46M32 44h46M32 58h30','M55 12a30 30 0 1 0 30 40A24 24 0 0 1 55 12z','M25 60q-15 0-15-14t20-16q6-18 28-14t22 22q18 2 18 14t-16 8z','M14 20h82v64H14zM14 38h82M34 12v14M76 12v14'];
S.forEach((s,i)=>{const b=document.createElement('button');b.className='ico';b.dataset.i=i;
b.innerHTML=`<svg viewBox="0 0 110 92" fill="#765039" stroke="#E8B14B" stroke-width="3" aria-hidden="true"><path d="${ic[i]}"/></svg><b>${s.name}</b><small>FILE ${s.id}</small>`;
b.onclick=()=>openS(i,b);icons.appendChild(b)});
function esc(t){return t}
function render(){const s=S[cur],d=s.docs[di];
win.innerHTML=`<div class="tb"><span id="wt">${s.title}</span><button class="x" aria-label="Close window">✕</button></div>
<div class="body"><div class="idx">${s.docs.map((x,j)=>`<button data-j="${j}" aria-current="${j==di}">${String(j+1).padStart(2,'0')} · ${x.t.split(' — ')[0]}</button>`).join('')}<button class="back">← Desktop</button></div>
<div class="pane">${s.figs?`<div class="figs">${FIGS.map(f=>`<div><b>${f[0]}</b>${f[1]}</div>`).join('')}</div>`:''}
<article class="doc ${d.wide?'wide':''}"><div class="chart"><img src="${C+d.img}" alt="${d.alt}"></div><div class="txt"><h3>${d.t}</h3>${d.p.map(p=>`<p>${p}</p>`).join('')}${d.n?`<p class="note">${d.n}</p>`:''}</div></article></div></div>`;
win.querySelector('.x').onclick=closeW;win.querySelector('.back').onclick=closeW;
win.querySelectorAll('[data-j]').forEach(b=>b.onclick=()=>{di=+b.dataset.j;render();win.querySelector('.idx [aria-current=true]').focus()});
}
function openS(i,btn){last=btn;cur=i;di=0;document.querySelectorAll('.ico').forEach(b=>b.classList.toggle('on',b==btn));
win.hidden=false;win.className='win open';render();win.querySelector('.x').focus()}
function closeW(){if(win.hidden)return;win.className='win closing';setTimeout(()=>{win.hidden=true;win.className='win';document.querySelectorAll('.ico').forEach(b=>b.classList.remove('on'));last&&last.focus()},300)}
$('#open').onclick=()=>{$('#intro').hidden=true;$('#desk').hidden=false;icons.firstChild.focus()};
$('#close').onclick=()=>{win.hidden=true;$('#desk').hidden=true;$('#intro').hidden=false;$('#open').focus()};
document.addEventListener('keydown',e=>{if(!win.hidden&&e.key==='Escape')closeW()});
