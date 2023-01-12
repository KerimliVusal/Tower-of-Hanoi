const About=()=>{
    const close=()=>{
        const abot=document.querySelector<HTMLElement>('.about')!;
        const abot2=document.querySelector<HTMLElement>('.about2')!;
        abot2.style.display='none';
        abot.style.visibility='hidden';
        abot.style.width='0';
        abot.style.height='0';
    
      }
    return(<div >
        <div className="about">
            <span className="clse" onClick={()=>close()}>x</span>
            <h4>What is Hanoi Towers</h4>
            <p className="about2">This article is about the mathematical disk game. For the card game, see Tower of Hanoy. For the Vietnamese skyscraper, see Keangnam Hanoi Landmark Tower.

A model set of the Tower of Hanoi (with 8 disks)

An animated solution of the Tower of Hanoi puzzle for T(4, 3)

Tower of Hanoi interactive display at Mexico City's Universum Museum
The Tower of Hanoi (also called The problem of Benares Temple[1] or Tower of Brahma or Lucas' Tower[2] and sometimes pluralized as Towers, or simply pyramid puzzle[3]) is a mathematical game or puzzle consisting of three rods and a number of disks of various diameters, which can slide onto any rod. The puzzle begins with the disks stacked on one rod in order of decreasing size, the smallest at the top, thus approximating a conical shape. The objective of the puzzle is to move the entire stack to the last rod, obeying the following rules:

Only one disk may be moved at a time.
Each move consists of taking the upper disk from one of the stacks and placing it on top of another stack or on an empty rod.
No disk may be placed on top of a disk that is smaller than it.
With 3 disks, the puzzle can be solved in 7 moves. The minimal number of moves required to solve a Tower of Hanoi puzzle is 2n − 1, where n is the number of disks.</p>
        </div></div>
    )
};export default About