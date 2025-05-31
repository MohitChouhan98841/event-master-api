import mongoose from "mongoose"

const Schema = mongoose.Schema;
const categorySchema = Schema(
    {

        name: { type: String, require: true },
        isActive: {
            type: Boolean,
            default: true
        },
        // isActive: { Type: Boolean, default: true },
    },
    {
        timestamps: true
    }
)

const categoryModel = mongoose.model("categories", categorySchema)

export default categoryModel;