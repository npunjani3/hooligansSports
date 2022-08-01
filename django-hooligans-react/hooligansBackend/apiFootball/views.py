from django.shortcuts import render
from django.http import JsonResponse
from django.http import HttpResponse
import requests
from hooligansBackend.settings import X_Rapid_Key, The_Odds_Key

# Create your views here.
def apiFootballHome(request):
    text = "This is your api home page"
    return (request, HttpResponse(text))


def getFootballStandings(request):
    url = "https://v3.football.api-sports.io/standings"

    querystring = {"season":"2022","league":"253"}

    headers = {
        "X-RapidAPI-Key": X_Rapid_Key,
        "X-RapidAPI-Host": "v3.football.api-sports.io"
    }

    response = requests.request("GET", url, headers=headers, params=querystring)
    
    response = response.json()
    league = response["response"][0]["league"]
    standings = response["response"][0]["league"]["standings"][0]
    standings2 = response["response"][0]["league"]["standings"][1]
    length1 = len(standings)
    length2 = len(standings2)

    data = {}
    
    leagueData = {
        "country": league["country"],
        "league": league["name"],
        "season": league["season"],
        "flag": league["flag"],
        "logo": league["logo"],
        "num": (length1+length2),
    }

    data["league"]= leagueData

    for i in range (length1):
        info = {
            "group": standings[i]["group"],
            "rank": standings[i]["rank"],
            "logo": standings[i]["team"]["logo"],
            "name": standings[i]["team"]["name"],
            "mp": standings[i]["all"]["played"],
            "w": standings[i]["all"]["win"],
            "d": standings[i]["all"]["draw"],
            "l": standings[i]["all"]["lose"],
            "gf": standings[i]["all"]["goals"]["for"],
            "gl": standings[i]["all"]["goals"]["against"],
            "diff": standings[i]["goalsDiff"],
            "p": standings[i]["points"],
            "form": standings[i]["form"],
        }

        data[i] = info

    for i in range (length2):
        info = {
            "group": standings2[i]["group"],
            "rank": standings2[i]["rank"],
            "logo": standings2[i]["team"]["logo"],
            "name": standings2[i]["team"]["name"],
            "mp": standings2[i]["all"]["played"],
            "w": standings2[i]["all"]["win"],
            "d": standings2[i]["all"]["draw"],
            "l": standings2[i]["all"]["lose"],
            "gf": standings2[i]["all"]["goals"]["for"],
            "gl": standings2[i]["all"]["goals"]["against"],
            "diff": standings2[i]["goalsDiff"],
            "p": standings2[i]["points"],
            "form": standings2[i]["form"],
        }

        data[i+14] = info

    return JsonResponse(data)

def getBaseballStandings(request):
    url = "https://v1.baseball.api-sports.io/standings"

    querystring = {"season":"2022","league":"1"}

    headers = {
        "X-RapidAPI-Key": X_Rapid_Key,
        "X-RapidAPI-Host": "v1.baseball.api-sports.io"
    }

    response = requests.request("GET", url, headers=headers, params=querystring)
    response = response.json()

    data = {}
    data["league"] = {"country": "USA", "league": "MLB - Regular Season", "logo": "https://media.api-sports.io/baseball/leagues/1.png"}
    standings = response["response"][0]
    length = len(standings)

    for i in range(30):
        info = {
            "rank": standings[i]["position"],
            "logo": standings[i]["team"]["logo"],
            "name": standings[i]["team"]["name"],
            "group": standings[i]["group"]["name"],
            "gp": standings[i]["games"]["played"],
            "w": standings[i]["games"]["win"]["total"],
            "l": standings[i]["games"]["lose"]["total"],
            "pf": standings[i]["points"]["for"],
            "pl": standings[i]["points"]["against"],
            "form": standings[i]["form"]
        }

        data[i] = info
    
    return JsonResponse(data)

def getSoccerOdds(request):
    apiKey = The_Odds_Key
    sportKey = "soccer_usa_mls"
    regions = "us"
    markets = "h2h"
    dateFormat = "iso"
    oddsFormat = "american"
    url = 'https://api.the-odds-api.com/v4/sports/'+sportKey+'/odds'

    odds_response = requests.get(url, params={
    'api_key': apiKey,
    'regions': regions,
    'markets': markets,
    'oddsFormat': oddsFormat,
    'dateFormat': dateFormat,
    })

    data = {}
    clean_data = []
    cleaned = {}

    odds_json = odds_response.json()
    data['response'] = odds_json
    clean_data = [data]
    clean_data = clean_data[0]['response']

    for idx, values in enumerate(clean_data):
        id = values["id"]
        date = values['commence_time']
        home = values['home_team']
        away = values['away_team']
        books = len(values['bookmakers'])
        bookie = values['bookmakers']
        for j in range(books):
            if(bookie[j]['key'] == 'draftkings'):
                outcomes = bookie[j]['markets'][0]['outcomes']
                info = {
                    'id': id,
                    'date' : date,
                    'home_team' : home, 
                    'away_team' : away,
                    'outcome': outcomes
                }
                
                cleaned[idx] = info

    return JsonResponse(cleaned)

def getBaseballOdds(request):
    apiKey = The_Odds_Key
    sportKey = "baseball_mlb"
    regions = "us"
    markets = "h2h"
    dateFormat = "iso"
    oddsFormat = "american"
    url = 'https://api.the-odds-api.com/v4/sports/'+sportKey+'/odds'

    odds_response = requests.get(url, params={
    'api_key': apiKey,
    'regions': regions,
    'markets': markets,
    'oddsFormat': oddsFormat,
    'dateFormat': dateFormat,
    })

    data = {}
    clean_data = []
    cleaned = {}

    odds_json = odds_response.json()
    data['response'] = odds_json
    clean_data = [data]
    clean_data = clean_data[0]['response']

    for idx, values in enumerate(clean_data):
        id = values["id"]
        date = values['commence_time']
        home = values['home_team']
        away = values['away_team']
        books = len(values['bookmakers'])
        bookie = values['bookmakers']
        for j in range(books):
            if(bookie[j]['key'] == 'draftkings'):
                outcomes = bookie[j]['markets'][0]['outcomes']
                info = {
                    'id': id,
                    'date' : date,
                    'home_team' : home, 
                    'away_team' : away,
                    'outcome': outcomes
                }
                
                cleaned[idx] = info

    return JsonResponse(cleaned)


