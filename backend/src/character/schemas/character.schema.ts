import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type CharacterDocument = Character & Document;

@Schema({
    autoIndex: true,
    timestamps: true,
})
export class Character {
    _id: Types.ObjectId;

    @Prop({
        type: Types.ObjectId,
        ref: 'Adventure',
        required: true,
    })
    adventureId: Types.ObjectId;

    @Prop({
        type: Types.ObjectId,
        ref: 'User',
        required: true,
    })
    userId: Types.ObjectId;

    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    race: string;

    @Prop({ type: Object, required: true })
    classes: { class: string; level: number }[];

    @Prop({ required: true })
    background: string; // Historique

    @Prop()
    backstory: string;

    @Prop({ type: Object, required: true })
    stats: {
        strength: number;
        dexterity: number;
        constitution: number;
        intelligence: number;
        wisdom: number;
        charisma: number;
    };

    @Prop({ type: Object, required: true })
    life: {
        max: number;
        current: number;
        bonus: Object;
    };

    @Prop({ type: Array, required: true })
    skills: [];

    @Prop({ type: Array, required: true })
    features: [];

    @Prop({ type: Object })
    spells: {
        cantrips: {};
        known: {};
    };

    @Prop({ type: Array, required: true })
    languages: [];
}

export const CharacterSchema = SchemaFactory.createForClass(Character);
