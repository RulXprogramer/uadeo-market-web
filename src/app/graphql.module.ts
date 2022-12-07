import { HttpClientModule } from '@angular/common/http'
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular'
import { HttpLink } from 'apollo-angular/http'
import { InMemoryCache } from '@apollo/client/core'
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

@NgModule({
 imports: [BrowserModule, ApolloModule, HttpClientModule],
 providers: [
    {
        provide: APOLLO_OPTIONS,
        useFactory(httpLink: HttpLink) {
            return {
                cache: new InMemoryCache(),
                link: httpLink.create({
                uri: 'http://localhost:5000/graphql'
                })
            }
        },
        deps: [HttpLink]
    }
 ]
})
export class GraphqlModule {}
