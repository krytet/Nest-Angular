import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { jwtConstants } from '../constants';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }

  async validate(payload: any) {
    //console.log(payload);
    console.log('!!!!!!!!!!!!!!');
    
    console.log(payload._doc.email);
    console.log(payload._doc.username);
    const result = {
      'username': payload._doc.username,
      'email': payload._doc.email,
      'firstName': payload._doc.firstName || null,
      'lastName': payload._doc.lastName || null,
      'isStaf': payload._doc.isStaf,
    }
    return result
    //return payload;
  }
}
