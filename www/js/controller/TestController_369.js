module.exports= function($scope, $state, TestService){
		console.log('enter controller_369')
		$scope.test = TestService.getTest()
	}
