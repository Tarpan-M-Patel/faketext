let inputid=1;
function addtext(){
    inputid++;
    let c1 = document.createElement('div');
    c1.classList.add('textbox-container');

    let c2 = document.createElement('div');
    c2.classList.add('textbox1-container');

                
    let t1=document.createElement( 'input' );
    t1.type='text';
    t1.className="input";
    t1.placeholder="Message";
    t1.id='messageInput'+ inputid;
    t1.setAttribute('oninput','txtmessage()');

    let p1=document.createElement( 'p' );
    p1.id='msgInput'+ inputid;

                
    let b1=document.createElement('button');
    b1.innerHTML='left';
    b1.id="b1"-inputid;
    b1.className="button is-light is-rounded";
    b1.classList.add('b1');
    b1.setAttribute('onclick','left()');
    
    let b2=document.createElement('button');
    b2.innerHTML='right';
    b2.id="b2-"+ inputid;
    b2.className="button is-dark is-rounded";
    b2.classList.add('b2');
    b2.setAttribute('onclick','right()');

    let br1=document.createElement('br');
    
    let br2=document.createElement('br');

    // let br3=document.createElement('br');
                
    c1.appendChild(t1);
    c1.appendChild(b1);
    c1.appendChild(b2);
    c1.appendChild(br1);
    c1.appendChild(br2);
    // c1.appendChild(br3); 
    c2.appendChild(p1);
    
    document.getElementById('textbox').appendChild(c1);
    document.getElementById('textbox2').appendChild(c2);
}          

function changename(){
    var a=document.getElementById("i1").value;
    // var b=a.value();
    // console.log(a)   
    var b=document.getElementById("p1");
    b.innerHTML=a;
}

// function txtmessage(){
//     var a=document.getElementById("messageInput0").value;
//     var b=document.getElementById("text1");
//     b.innerHTML=a;
// }

function txtmessage(){
    var a=document.getElementById("messageInput"+inputid);
    var c=a.value;
    // console.log(c);
    var b=document.getElementById("msgInput"+inputid);
    b.innerHTML=c;
}

function right(){
    document.getElementById("msgInput"+inputid).style.textAlign = 'right';
}

function left(){
    document.getElementById("msgInput"+inputid).style.textAlign = 'left';
}

