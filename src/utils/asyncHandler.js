const asyncHandler=()=>{
        (req,res,next,error)=>{
            Promise.resolve(requestHandler(req,res,next,error)).
            catch((err)=>next(err))
        }
    }
    export {asyncHandler}

    //OR

    // const asyncHandler=(
    //     (fn)=>async(req,res,next)=>{
    //         try {
                
    //         } catch (error) {
    //             res.status(error.code || 500).json({
    //                 success:false,
    //                 message:error.message
    //             })
    //         }
    // })