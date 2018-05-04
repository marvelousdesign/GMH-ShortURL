const database =[]


module.exports = {
    sayHey(req,res){
      res.status(200).send({
        message: 'hey'
      })
    },

    
    postForm(req,res) {
      console.log (req.body)

      database.push(req.body)
      console.log(database)

    if (req.body.length === 0){
        req.body = 'walter'
    } else if (req.body.length < 6) {
      res.status(500).send({
        message: 'too shoort, six more characters please  '
      })
      return
    }

            res.status(200).send({
              message: req.body
            })
        }
        
      }

 
  const makeid = () =>{

  }
  database.push();