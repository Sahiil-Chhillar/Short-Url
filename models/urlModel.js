import mongoose from 'mongoose';

const urlSchema = new mongoose.Schema({
    shortId: {
        type: String,
        required: true,
        unique: true,
    },
    redirectUrl: {
        type: String,
        required: true,
        validate: {
            validator: function(value) {
                const regex = /^(https?:\/\/)?([a-z0-9-]+\.)+[a-z0-9]{2,7}(\/\S*)?$/i;
                return regex.test(value);
            },
            message: 'Invalid URL format',
        },
    },
    visitHistory: [{
        timestamp: {
            type: Date,
        },
    }],
}, {
    timestamps: true,
});

urlSchema.index({ redirectUrl: 1 });

const URL = mongoose.model('url', urlSchema);

export default URL;