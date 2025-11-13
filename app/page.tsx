"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Checkbox } from "@/components/ui/checkbox"
import { PlusCircle, XCircle, Ship, User, Zap, Plus, Minus } from "lucide-react"
import { ships, upgrades, pilotAbilities, careerPaths } from "@/lib/data"

export default function ThreatCalculator() {
  const [pilots, setPilots] = useState<
    Array<{
      id: number
      career: string
      initiative: number
      ship: string
      upgrades: { name: string; quantity: number }[]
      abilities: string[]
      droidWingman: boolean
    }>
  >([])

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    console.log("[v0] Component mounted and hydrated")
  }, [])

  const addPilot = () => {
    console.log("[v0] addPilot called")
    setPilots([
      ...pilots,
      {
        id: Date.now(),
        career: "Professional",
        initiative: 1,
        ship: "TYE-Wing",
        upgrades: [],
        abilities: [],
        droidWingman: false,
      },
    ])
  }

  const removePilot = (id: number) => {
    setPilots(pilots.filter((p) => p.id !== id))
  }

  const updatePilot = (id: number, field: string, value: any) => {
    setPilots(
      pilots.map((p) => {
        if (p.id === id) {
          if (field === "ship") {
            return { ...p, [field]: value, upgrades: [] }
          }
          return { ...p, [field]: value }
        }
        return p
      }),
    )
  }

  const addUpgrade = (pilotId: number, upgradeName: string) => {
    setPilots(
      pilots.map((p) => {
        if (p.id === pilotId) {
          const existingUpgrade = p.upgrades.find((u) => u.name === upgradeName)
          if (existingUpgrade) {
            return {
              ...p,
              upgrades: p.upgrades.map((u) => (u.name === upgradeName ? { ...u, quantity: u.quantity + 1 } : u)),
            }
          } else {
            return {
              ...p,
              upgrades: [...p.upgrades, { name: upgradeName, quantity: 1 }],
            }
          }
        }
        return p
      }),
    )
  }

  const removeUpgrade = (pilotId: number, upgradeName: string) => {
    setPilots(
      pilots.map((p) => {
        if (p.id === pilotId) {
          const existingUpgrade = p.upgrades.find((u) => u.name === upgradeName)
          if (existingUpgrade && existingUpgrade.quantity > 1) {
            return {
              ...p,
              upgrades: p.upgrades.map((u) => (u.name === upgradeName ? { ...u, quantity: u.quantity - 1 } : u)),
            }
          } else {
            return {
              ...p,
              upgrades: p.upgrades.filter((u) => u.name !== upgradeName),
            }
          }
        }
        return p
      }),
    )
  }

  const deleteUpgrade = (pilotId: number, upgradeName: string) => {
    setPilots(
      pilots.map((p) => {
        if (p.id === pilotId) {
          return {
            ...p,
            upgrades: p.upgrades.filter((u) => u.name !== upgradeName),
          }
        }
        return p
      }),
    )
  }

  const calculatePilotThreat = (pilot: any) => {
    const ship = ships.find((s) => s.name === pilot.ship)
    const shipThreat = ship?.baseThreat || 0

    const initiativeThreat = pilot.initiative * 2

    const upgradeThreat = pilot.upgrades.reduce((total: number, upgrade: { name: string; quantity: number }) => {
      const upgradeData = upgrades.find((u) => u.name === upgrade.name)
      if (!upgradeData || !ship) return total

      const baseThreat = upgradeData.threat
      const sizeModifier = upgradeData.sizeModifier[ship.size] || 0
      const agilityModifier = upgradeData.agilityModifier[ship.agility] || 0
      const totalThreat = baseThreat + sizeModifier + agilityModifier

      return total + totalThreat * upgrade.quantity
    }, 0)

    const abilityThreat = pilot.abilities.reduce((total: number, abilityName: string) => {
      const ability = pilotAbilities.find((a) => a.name === abilityName)
      return total + (ability?.xpCost || 0)
    }, 0)

    const droidWingmanThreat = pilot.droidWingman ? 15 : 0

    return shipThreat + initiativeThreat + upgradeThreat + abilityThreat + droidWingmanThreat
  }

  const calculateAverageThreat = () => {
    if (pilots.length === 0) return 0
    const total = pilots.reduce((sum, pilot) => sum + calculatePilotThreat(pilot), 0)
    return total / pilots.length
  }

  const calculateThreatLevel = () => {
    const avg = calculateAverageThreat()
    return Math.round(avg / 25)
  }

  const getAvailableAbilities = (career: string) => {
    return pilotAbilities.filter((a) => a.career === career)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-amber-400 mb-2 flex items-center justify-center gap-3">
            <Ship className="w-10 h-10" />
            Pirate Lords Threat Calculator
          </h1>
          <p className="text-slate-400 text-lg">Calculate your crew's threat level for PLotAC missions</p>
        </div>

        {/* Threat Level Display */}
        <Card className="mb-6 bg-slate-900 border-amber-600">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2 text-amber-400">
              <Zap className="w-6 h-6" />
              Mission Threat Level
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
                <div className="text-sm text-slate-400 mb-1">Pilots</div>
                <div className="text-3xl font-bold text-cyan-400">{pilots.length}</div>
              </div>
              <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
                <div className="text-sm text-slate-400 mb-1">Average Threat</div>
                <div className="text-3xl font-bold text-orange-400">{calculateAverageThreat().toFixed(1)}</div>
              </div>
              <div className="bg-slate-800 p-4 rounded-lg border border-amber-600">
                <div className="text-sm text-amber-400 mb-1">Threat Level</div>
                <div className="text-4xl font-bold text-amber-400">{calculateThreatLevel()}</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Add Pilot Button */}
        <div className="mb-6 flex justify-center">
          <Button
            type="button"
            onClick={(e) => {
              e.preventDefault()
              console.log("[v0] Button clicked, mounted:", mounted)
              addPilot()
            }}
            size="lg"
            className="bg-amber-600 hover:bg-amber-700 text-slate-950"
          >
            <PlusCircle className="mr-2 w-5 h-5" />
            Add Pilot
          </Button>
        </div>

        {/* Pilots List */}
        <div className="space-y-4">
          {pilots.map((pilot, index) => {
            const ship = ships.find((s) => s.name === pilot.ship)
            return (
              <Card key={pilot.id} className="bg-slate-900 border-slate-700">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <CardTitle className="text-xl flex items-center gap-2 text-cyan-400">
                        <User className="w-5 h-5" />
                        Pilot {index + 1}
                      </CardTitle>
                      <Badge variant="outline" className="text-sm border-cyan-600 text-cyan-400">
                        Size: {ship?.size || 0}
                      </Badge>
                      <Badge variant="outline" className="text-sm border-cyan-600 text-cyan-400">
                        Agility: {ship?.agility || 0}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4">
                      <Badge variant="outline" className="text-lg px-3 py-1 border-amber-600 text-amber-400">
                        Threat: {calculatePilotThreat(pilot)}
                      </Badge>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => removePilot(pilot.id)}
                        className="text-red-400 hover:text-red-300 hover:bg-red-950"
                      >
                        <XCircle className="w-5 h-5" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="basic" className="w-full">
                    <TabsList className="grid w-full grid-cols-3 bg-slate-800">
                      <TabsTrigger value="basic">Basic Info</TabsTrigger>
                      <TabsTrigger value="upgrades">Upgrades</TabsTrigger>
                      <TabsTrigger value="abilities">Pilot Abilities</TabsTrigger>
                    </TabsList>

                    <TabsContent value="basic" className="space-y-4 mt-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div>
                          <Label className="text-slate-300">Career Path</Label>
                          <Select value={pilot.career} onValueChange={(v) => updatePilot(pilot.id, "career", v)}>
                            <SelectTrigger className="bg-slate-800 border-slate-700 text-slate-200">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent className="bg-slate-800 border-slate-700">
                              {careerPaths.map((career) => (
                                <SelectItem key={career} value={career} className="text-slate-200">
                                  {career}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <Label className="text-slate-300">Initiative</Label>
                          <Select
                            value={pilot.initiative.toString()}
                            onValueChange={(v) => updatePilot(pilot.id, "initiative", Number.parseInt(v))}
                          >
                            <SelectTrigger className="bg-slate-800 border-slate-700 text-slate-200">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent className="bg-slate-800 border-slate-700">
                              {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                                <SelectItem key={i} value={i.toString()} className="text-slate-200">
                                  Initiative {i}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <p className="text-xs text-slate-500 mt-1">+{pilot.initiative * 2} threat</p>
                        </div>

                        <div>
                          <Label className="text-slate-300">Ship</Label>
                          <Select value={pilot.ship} onValueChange={(v) => updatePilot(pilot.id, "ship", v)}>
                            <SelectTrigger className="bg-slate-800 border-slate-700 text-slate-200">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent className="bg-slate-800 border-slate-700">
                              {ships.map((ship) => (
                                <SelectItem key={ship.name} value={ship.name} className="text-slate-200">
                                  {ship.name} ({ship.baseThreat})
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <p className="text-xs text-slate-500 mt-1">
                            +{ships.find((s) => s.name === pilot.ship)?.baseThreat || 0} threat
                          </p>
                        </div>
                      </div>

                      {pilot.career === "Cyborg" && pilot.initiative >= 3 && (
                        <div className="bg-slate-800 border border-amber-600 rounded-lg p-4">
                          <div className="flex items-center space-x-3">
                            <Checkbox
                              id={`droid-${pilot.id}`}
                              checked={pilot.droidWingman}
                              onCheckedChange={(checked) => updatePilot(pilot.id, "droidWingman", checked === true)}
                              className="border-amber-600 data-[state=checked]:bg-amber-600"
                            />
                            <Label htmlFor={`droid-${pilot.id}`} className="text-slate-200 font-medium cursor-pointer">
                              Droid Wingman
                              <span className="text-amber-400 ml-2">+15 threat</span>
                            </Label>
                          </div>
                          <p className="text-xs text-slate-500 mt-2 ml-7">
                            Available at Initiative 3+ for Cyborg career
                          </p>
                        </div>
                      )}
                    </TabsContent>

                    <TabsContent value="upgrades" className="mt-4">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <Label className="text-slate-300">Selected Upgrades</Label>
                          <Badge variant="outline" className="border-slate-600 text-slate-400">
                            {pilot.upgrades.reduce((sum, u) => sum + u.quantity, 0)} total
                          </Badge>
                        </div>

                        {pilot.upgrades.length > 0 && (
                          <div className="bg-slate-800 rounded border border-slate-700 p-3 space-y-2">
                            <div className="text-sm font-medium text-slate-300 mb-2">Equipped Upgrades</div>
                            {pilot.upgrades.map((upgrade) => {
                              const upgradeData = upgrades.find((u) => u.name === upgrade.name)
                              if (!upgradeData || !ship) return null

                              const baseThreat = upgradeData.threat
                              const sizeModifier = upgradeData.sizeModifier[ship.size] || 0
                              const agilityModifier = upgradeData.agilityModifier[ship.agility] || 0
                              const totalThreat = baseThreat + sizeModifier + agilityModifier

                              return (
                                <div
                                  key={upgrade.name}
                                  className="flex items-center justify-between p-2 rounded bg-slate-900"
                                >
                                  <div className="flex-1">
                                    <div className="font-medium text-slate-200">{upgrade.name}</div>
                                    <div className="text-xs text-slate-500">
                                      {upgradeData.type} • Base: {baseThreat}
                                      {sizeModifier !== 0 && ` + Size(${sizeModifier})`}
                                      {agilityModifier !== 0 && ` + Agility(${agilityModifier})`}
                                      {" = "}
                                      {totalThreat} threat each
                                    </div>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <Button
                                      type="button"
                                      size="sm"
                                      variant="outline"
                                      onClick={() => removeUpgrade(pilot.id, upgrade.name)}
                                      className="h-8 w-8 p-0 border-slate-600"
                                    >
                                      <Minus className="w-3 h-3" />
                                    </Button>
                                    <Badge variant="outline" className="border-amber-600 text-amber-400">
                                      {upgrade.quantity}
                                    </Badge>
                                    <Button
                                      type="button"
                                      size="sm"
                                      variant="outline"
                                      onClick={() => addUpgrade(pilot.id, upgrade.name)}
                                      className="h-8 w-8 p-0 border-slate-600"
                                    >
                                      <Plus className="w-4 h-4" />
                                    </Button>
                                    <Button
                                      type="button"
                                      size="sm"
                                      variant="ghost"
                                      onClick={() => deleteUpgrade(pilot.id, upgrade.name)}
                                      className="text-red-400 hover:text-red-300 hover:bg-red-950 ml-2"
                                    >
                                      <XCircle className="w-4 h-4" />
                                    </Button>
                                  </div>
                                </div>
                              )
                            })}
                          </div>
                        )}

                        <div className="flex items-center justify-between">
                          <Label className="text-slate-300">Available Upgrades</Label>
                        </div>

                        <ScrollArea className="h-[300px] rounded border border-slate-700 bg-slate-800 p-3">
                          <div className="space-y-2">
                            {upgrades.map((upgrade) => {
                              const existingUpgrade = pilot.upgrades.find((u) => u.name === upgrade.name)
                              const baseThreat = upgrade.threat
                              const sizeModifier = ship ? upgrade.sizeModifier[ship.size] || 0 : 0
                              const agilityModifier = ship ? upgrade.agilityModifier[ship.agility] || 0 : 0
                              const totalThreat = baseThreat + sizeModifier + agilityModifier

                              return (
                                <div
                                  key={upgrade.name}
                                  className="flex items-center justify-between p-2 rounded hover:bg-slate-700"
                                >
                                  <div className="flex-1">
                                    <div className="font-medium text-slate-200">{upgrade.name}</div>
                                    <div className="text-xs text-slate-500">
                                      {upgrade.type} • Base: {baseThreat}
                                      {sizeModifier !== 0 && ` + Size(${sizeModifier})`}
                                      {agilityModifier !== 0 && ` + Agility(${agilityModifier})`}
                                      {" = "}
                                      {totalThreat} threat
                                    </div>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    {existingUpgrade && (
                                      <Badge variant="outline" className="border-amber-600 text-amber-400 mr-2">
                                        {existingUpgrade.quantity} equipped
                                      </Badge>
                                    )}
                                    <Button
                                      type="button"
                                      size="sm"
                                      variant="outline"
                                      onClick={() => addUpgrade(pilot.id, upgrade.name)}
                                      className="border-slate-600 text-slate-300"
                                    >
                                      Add
                                    </Button>
                                  </div>
                                </div>
                              )
                            })}
                          </div>
                        </ScrollArea>
                      </div>
                    </TabsContent>

                    <TabsContent value="abilities" className="mt-4">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <Label className="text-slate-300">Pilot Abilities ({pilot.career})</Label>
                          <Badge variant="outline" className="border-slate-600 text-slate-400">
                            {pilot.abilities.length} selected
                          </Badge>
                        </div>

                        <ScrollArea className="h-[200px] rounded border border-slate-700 bg-slate-800 p-3">
                          <div className="space-y-2">
                            {getAvailableAbilities(pilot.career).map((ability) => (
                              <div
                                key={ability.name}
                                className="flex items-center justify-between p-2 rounded hover:bg-slate-700"
                              >
                                <div className="flex-1">
                                  <div className="font-medium text-slate-200">{ability.name}</div>
                                  <div className="text-xs text-slate-500">
                                    XP Cost: {ability.xpCost} • Min Initiative: {ability.minInitiative}
                                  </div>
                                </div>
                                <Button
                                  type="button"
                                  size="sm"
                                  variant={pilot.abilities.includes(ability.name) ? "default" : "outline"}
                                  onClick={() => {
                                    const newAbilities = pilot.abilities.includes(ability.name)
                                      ? pilot.abilities.filter((a) => a !== ability.name)
                                      : [...pilot.abilities, ability.name]
                                    updatePilot(pilot.id, "abilities", newAbilities)
                                  }}
                                  disabled={pilot.initiative < ability.minInitiative}
                                  className={
                                    pilot.abilities.includes(ability.name)
                                      ? "bg-amber-600 hover:bg-amber-700"
                                      : "border-slate-600 text-slate-300"
                                  }
                                >
                                  {pilot.abilities.includes(ability.name) ? "Remove" : "Add"}
                                </Button>
                              </div>
                            ))}
                          </div>
                        </ScrollArea>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {pilots.length === 0 && (
          <Card className="bg-slate-900 border-slate-700">
            <CardContent className="py-12 text-center">
              <Ship className="w-16 h-16 mx-auto mb-4 text-slate-600" />
              <p className="text-slate-400 text-lg">No pilots added yet. Click "Add Pilot" to get started!</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
