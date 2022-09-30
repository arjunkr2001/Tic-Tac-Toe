const c00 = document.getElementById('00')
        const c01 = document.getElementById('01')
        const c02 = document.getElementById('02')
        const c10 = document.getElementById('10')
        const c11 = document.getElementById('11')
        const c12 = document.getElementById('12')
        const c20 = document.getElementById('20')
        const c21 = document.getElementById('21')
        const c22 = document.getElementById('22')

        const c = [[c00,c01,c02],[c10,c11,c12],[c20,c21,c22]]

        let m = [[null,null,null],
                 [null,null,null],
                 [null,null,null]]

        let wait = false

        function checkWon(){
            if(m[0][0]!==null && m[0][0]===m[1][1] && m[1][1]===m[2][2]){
                        console.log("won1")
                        c00.style.backgroundColor = 'rgb(62, 247, 10)'
                        c11.style.backgroundColor = 'rgb(62, 247, 10)'
                        c22.style.backgroundColor = 'rgb(62, 247, 10)'
                        return true
                    }
                    else if(m[0][0]!==null && m[0][0]==m[0][1] && m[0][0]==m[0][2]){
                        console.log("won")
                        c00.style.backgroundColor = 'rgb(62, 247, 10)'
                        c01.style.backgroundColor = 'rgb(62, 247, 10)'
                        c02.style.backgroundColor = 'rgb(62, 247, 10)'
                        return true
                    }
                    else if(m[1][0]!==null && m[1][0]==m[1][1] && m[1][0]==m[1][2]){
                        console.log("won")
                        c10.style.backgroundColor = 'rgb(62, 247, 10)'
                        c11.style.backgroundColor = 'rgb(62, 247, 10)'
                        c12.style.backgroundColor = 'rgb(62, 247, 10)'
                        return true
                    }
                    else if(m[2][0]!==null && m[2][0]==m[2][1] && m[2][0]==m[2][2]){
                        console.log("won")
                        c20.style.backgroundColor = 'rgb(62, 247, 10)'
                        c21.style.backgroundColor = 'rgb(62, 247, 10)'
                        c22.style.backgroundColor = 'rgb(62, 247, 10)'
                        return true
                    }
                    else if(m[0][0]!==null && m[0][0]==m[1][0] && m[0][0]==m[2][0]){
                        console.log("won")
                        c00.style.backgroundColor = 'rgb(62, 247, 10)'
                        c10.style.backgroundColor = 'rgb(62, 247, 10)'
                        c20.style.backgroundColor = 'rgb(62, 247, 10)'
                        return true
                    }
                    else if(m[0][1]!==null && m[0][1]==m[1][1] && m[0][1]==m[2][1]){
                        console.log("won")
                        c01.style.backgroundColor = 'rgb(62, 247, 10)'
                        c11.style.backgroundColor = 'rgb(62, 247, 10)'
                        c21.style.backgroundColor = 'rgb(62, 247, 10)'
                        return true
                    }
                    else if(m[0][2]!==null && m[0][2]==m[1][2] && m[0][2]==m[2][2]){
                        console.log("won")
                        c02.style.backgroundColor = 'rgb(62, 247, 10)'
                        c12.style.backgroundColor = 'rgb(62, 247, 10)'
                        c22.style.backgroundColor = 'rgb(62, 247, 10)'
                        return true
                    }
                    else if(m[0][2]!==null && m[0][2]==m[1][1] && m[0][2]==m[2][0]){
                        console.log("won")
                        c02.style.backgroundColor = 'rgb(62, 247, 10)'
                        c11.style.backgroundColor = 'rgb(62, 247, 10)'
                        c20.style.backgroundColor = 'rgb(62, 247, 10)'
                        return true
                    }
        }

        function refreshGrid(){
            for(let i=0;i<3;i++)
                for(let j=0;j<3;j++)
                    c[i][j].innerText = m[i][j]

            checkWon()
        }
        refreshGrid()

        function set(i,j){
            if(wait || checkWon()) return
            if(m[i][j] === null){
                m[i][j] = '🔷'
                refreshGrid()
                if(checkWon()) return
                wait = true
                setTimeout(()=>{
                    cset()
                    wait = false
                    refreshGrid()
                },1000)
            }
            //refreshGrid()
        }
        
        function cset(){
            let i = Math.floor(Math.random()*3)
            let j = Math.floor(Math.random()*3)
            console.log(i,j)
            if(m[i][j] === null)
                m[i][j] = '🔶'
            else if(m[0].includes(null) || m[1].includes(null) || m[2].includes(null))
                cset()
            else
                return
            // while(m[i][j]!==null){
            //     i = Math.floor(Math.random()*3)
            //     j = Math.floor(Math.random()*3)
            // }
            // m[i][j] = 'X'
        }

        function re(){
            m = [[null,null,null],
                 [null,null,null],
                 [null,null,null]]

            for(let i=0;i<3;i++)
                for(let j=0;j<3;j++)
                    c[i][j].style.backgroundColor = 'rgba(0,0,0,0.1)'

            refreshGrid()
        }