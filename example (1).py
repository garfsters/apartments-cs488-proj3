from flask import Flask, request, redirect, render_template
import json
import boto3


#---------------------------------------------------------------
def apts(search):
    f = open('/home/garfsters/data/apt.json')
    apt = json.load(f)
    f.close()

# home = apts | homes = apt
    results = []
    search = search.lower() if search else ''

    beds = request.args.get('bedSort', '') or ''
    baths = request.args.get('bathSort', '') or ''
    rent = request.args.get('rentSort', '') or ''

    for apts in apt:
        if search in apts['title'].lower() or search in apts['description'].lower():
            match_beds = (beds == "" or
                         (beds == "0" and int(apts['bedrooms']) == 0) or
                         (beds == "1" and int(apts['bedrooms']) == 1) or
                         (beds == "2" and int(apts['bedrooms']) >= 2))

            match_baths = (baths == "" or
                          (baths == "1" and int(apts['bathrooms']) == 1) or
                          (baths == "2" and int(apts['bathrooms']) >= 2))

            if match_beds and match_baths:
                results.append(apts)


    if rent == 'asc':
        results.sort(key=lambda x: x['rent'])
    elif rent == 'dec':
        results.sort(key=lambda x: x['rent'], reverse=True)

    return {'result' : results }







